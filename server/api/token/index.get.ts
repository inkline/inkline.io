import { addAuthMiddleware } from '~/server/utilities';
import {
    customerHasActiveSubscription,
    getMembershipByUserIdAndTeamId,
    getTeamById,
    getUserById,
    getNonceByUserIdAndTeamId
} from '~/server/services';
import type { NonceType } from '~/types';
import { defineEventHandler, setResponseStatus } from 'h3';
import jwt from 'jsonwebtoken';

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
                const team = await getTeamById(teamId);

                if (!team) {
                    setResponseStatus(event, 404);
                    return {
                        message: 'Team not found.'
                    };
                }

                const membership = await getMembershipByUserIdAndTeamId(userId, teamId);
                if (!membership) {
                    setResponseStatus(event, 404);
                    return {
                        message: 'User is not a member of team.'
                    };
                }

                let teamOwnerStripeCustomerId = '';
                if (team.ownerId === userId) {
                    teamOwnerStripeCustomerId = stripeCustomerId;
                } else {
                    const teamOwner = await getUserById(team.ownerId);
                    teamOwnerStripeCustomerId = teamOwner?.user_metadata?.stripe_customer_id;
                }
                const teamOwnerHasActiveSubscription = await customerHasActiveSubscription(
                    teamOwnerStripeCustomerId
                );

                if (!teamOwnerHasActiveSubscription) {
                    setResponseStatus(event, 405);
                    return {
                        message: 'Subscription is required to retrieve auth token.'
                    };
                }
            } else {
                const hasActiveSubscription = await customerHasActiveSubscription(stripeCustomerId);

                if (!hasActiveSubscription) {
                    setResponseStatus(event, 405);
                    return {
                        message: 'Subscription is required to retrieve auth token.'
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
            const { nonce } = (await getNonceByUserIdAndTeamId(userId, teamId)) as NonceType;
            const payload = {
                userId,
                nonce,
                ...(teamId ? { teamId } : {})
            };

            const secret = process.env.NUXT_VERDACCIO_SECRET_KEY as string;
            const token = jwt.sign(payload, secret, {});

            return {
                token
            };
        } catch (error) {
            setResponseStatus(event, 500);
            console.log(error);
            return {
                message: 'Something went wrong when retrieving your auth token.',
                error
            };
        }
    })
);
