import { addAuthMiddleware } from '~/server/utilities';
import {
    customerHasActiveSubscription,
    getMembershipByUserIdAndTeamId,
    getNonceByUserIdAndTeamId,
    updateNonceById,
    createJWT,
    getTeamWithStatusById
} from '~/server/services';
import type { NonceType } from '~/types';
import { defineEventHandler, setResponseStatus } from 'h3';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId, email } = event.context.auth.payload;
        const stripeCustomerId = event.context.auth.payload.stripe_customer_id;
        const query = getQuery(event);
        const teamId = query.teamId as string;

        /**
         * Data & Permissions validation
         */
        try {
            if (teamId) {
                const team = await getTeamWithStatusById(teamId);

                if (!team) {
                    setResponseStatus(event, 404);
                    return {
                        message: 'Team not found.'
                    };
                }

                if (!team.active) {
                    setResponseStatus(event, 405);
                    return {
                        message: 'Subscription is required to regenerate auth token.'
                    };
                }

                const membership = await getMembershipByUserIdAndTeamId(userId, teamId);
                if (!membership) {
                    setResponseStatus(event, 404);
                    return {
                        message: 'User is not a member of team.'
                    };
                }
            } else {
                const hasActiveSubscription = await customerHasActiveSubscription(stripeCustomerId);

                if (!hasActiveSubscription) {
                    setResponseStatus(event, 405);
                    return {
                        message: 'Subscription is required to regenerate auth token.'
                    };
                }
            }
        } catch (error) {
            setResponseStatus(event, 500);
            console.log(error);
            return {
                message: 'Something went wrong when checking subscription status.',
                error
            };
        }

        /**
         * Generate auth token
         */

        try {
            const { id } = (await getNonceByUserIdAndTeamId(userId, teamId)) as NonceType;
            const { nonce } = (await updateNonceById(id)) as NonceType;
            const token = createJWT(nonce, userId, teamId);

            return {
                token
            };
        } catch (error) {
            setResponseStatus(event, 500);
            console.log(error);
            return {
                message: 'Something went wrong when regenerating your auth token.',
                error
            };
        }
    })
);
