import { addAuthMiddleware, firebase } from '~/server/utilities';
import { defineEventHandler, setResponseStatus } from 'h3';
import {
    adjustSeatsCount,
    deleteMembershipsByTeamId,
    deleteTeamById,
    getTeamById
} from '~/server/services';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId } = event.context.auth.payload;
        const stripeCustomerId = event.context.auth.payload.stripe_customer_id;
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

            if (team.ownerId !== userId) {
                setResponseStatus(event, 403);
                return {
                    message: 'You are not the owner of this team.'
                };
            }

            /**
             * Delete team
             */

            // Delete team
            await deleteTeamById(teamId);

            // Delete memberships
            await deleteMembershipsByTeamId(teamId);

            // Adjust seats count
            await adjustSeatsCount(userId, stripeCustomerId);

            return {};
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
