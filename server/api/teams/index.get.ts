import { addAuthMiddleware } from '~/server/utilities';
import { defineEventHandler, setResponseStatus } from 'h3';
import type { TeamsGetResponse, TeamType } from '~/types';
import { getMembershipsByEmail, getMembershipsByUserId, getTeamById } from '~/server/services';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId, email } = event.context.auth.payload;

        try {
            const memberships = await getMembershipsByUserId(userId);
            const invites = (await getMembershipsByEmail(email)).filter((invite) => !invite.userId);

            const response: TeamsGetResponse = {
                teams: [],
                memberships: [],
                invites: []
            };

            for (const membership of memberships) {
                const team = (await getTeamById(membership.teamId)) as TeamType;

                response.teams.push(team);
                response.memberships.push(membership);
            }

            for (const invite of invites) {
                const team = (await getTeamById(invite.teamId)) as TeamType;

                response.teams.push(team);
                response.invites.push(invite);
            }

            return response;
        } catch (error) {
            setResponseStatus(event, 500);
            console.log(error);

            return {
                message: 'Something went wrong when retrieving teams.',
                error
            };
        }
    })
);
