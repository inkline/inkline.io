import { addAuthMiddleware, firebase } from '~/server/utilities';
import {
    adjustSeatsCount,
    createMembership,
    deleteMembershipById,
    getMembershipsByTeamId,
    getTeamById,
    updateTeamById
} from '~/server/services';
import { defineEventHandler, setResponseStatus } from 'h3';
import { TeamsPutResponse } from '~/types';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId } = event.context.auth.payload;
        const stripeCustomerId = event.context.auth.payload.stripe_customer_id;
        const payload = await readBody(event);
        const teamId = event.context.params?.id;

        /**
         * Data validation
         */

        if (!teamId) {
            setResponseStatus(event, 400);
            return {
                message: 'Missing team ID.'
            };
        }

        if (!payload.name) {
            setResponseStatus(event, 400);
            return {
                message: 'Missing team name data.'
            };
        }

        if (!payload.members || !Array.isArray(payload.members)) {
            setResponseStatus(event, 400);
            return {
                message: 'Missing team members data.'
            };
        }
        try {
            const team = await getTeamById(teamId);

            if (!team) {
                setResponseStatus(event, 404);
                return {
                    message: 'Team not found.'
                };
            }

            /**
             * Permissions validation
             */

            if (team?.ownerId !== userId) {
                setResponseStatus(event, 403);
                return {
                    message: 'You are not the owner of this team.'
                };
            }

            /**
             * Update team
             */

            // Update team name
            if (team.name !== payload.name) {
                await updateTeamById(teamId, {
                    name: payload.name
                });
            }

            const currentMemberships = await getMembershipsByTeamId(teamId);
            const currentMembershipEmails = currentMemberships.map(
                (membership) => membership.email!
            );

            const currentMemberEmailsSet = new Set<string>(currentMembershipEmails);
            const payloadMemberEmailsSet = new Set<string>(payload.members);

            const newMemberEmailsSet = new Set<string>(
                [...payloadMemberEmailsSet].filter((email) => !currentMemberEmailsSet.has(email))
            );
            const deletedMemberEmailsSet = new Set<string>(
                [...currentMemberEmailsSet].filter((email) => !payloadMemberEmailsSet.has(email))
            );

            newMemberEmailsSet.delete(userId);
            deletedMemberEmailsSet.delete(userId);

            // Delete membership for each member that is in the database but not in the payload
            for (const email of deletedMemberEmailsSet) {
                const membershipId = currentMemberships.find(
                    (membership) => membership.email === email
                )!.id;

                await deleteMembershipById(membershipId);
            }

            // Create membership for each member that is in the payload but not in the database
            for (const email of newMemberEmailsSet) {
                await createMembership({
                    email,
                    teamId
                });

                // @TODO Send email notifications to new members
            }

            // Adjust seats count
            await adjustSeatsCount(userId, stripeCustomerId);

            const updatedTeam = await getTeamById(teamId);
            const updatedMemberships = await getMembershipsByTeamId(teamId);

            return {
                team: updatedTeam,
                memberships: updatedMemberships
            } as TeamsPutResponse;
        } catch (error) {
            setResponseStatus(event, 500);
            console.log(error);

            return {
                message: 'Something went wrong when creating a team.',
                error
            };
        }
    })
);
