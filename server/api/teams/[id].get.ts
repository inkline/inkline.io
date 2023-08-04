import { addAuthMiddleware } from '~/server/utilities';
import { defineEventHandler, setResponseStatus } from 'h3';
import type { TeamGetResponse } from '~/types';
import {
    getMembershipByUserIdAndTeamId,
    getMembershipsByTeamId,
    getTeamById
} from '~/server/services';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId } = event.context.auth.payload;
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

            const membership = await getMembershipByUserIdAndTeamId(userId, teamId);
            if (!membership) {
                setResponseStatus(event, 404);
                return {
                    message: 'Team not found.'
                };
            }

            /**
             * Get team
             */

            const memberships = await getMembershipsByTeamId(teamId);

            return {
                team,
                memberships
            } as TeamGetResponse;
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
