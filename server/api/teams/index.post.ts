import { addAuthMiddleware } from '~/server/utilities';
import {
    adjustSeatsCount,
    createMembership,
    createTeam,
    customerHasActiveSubscription
} from '~/server/services';
import { defineEventHandler, setResponseStatus } from 'h3';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId, email } = event.context.auth.payload;
        const stripeCustomerId = event.context.auth.payload.stripe_customer_id;
        const payload = await readBody(event);

        /**
         * Data validation
         */

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

        /**
         * Permissions validation
         */

        try {
            const hasActiveSubscription = await customerHasActiveSubscription(stripeCustomerId);

            if (!hasActiveSubscription) {
                setResponseStatus(event, 405);
                return {
                    message: 'Subscription is required to create a team.'
                };
            }
        } catch (error) {
            setResponseStatus(event, 500);
            return {
                message: 'Something went wrong when checking subscription status.'
            };
        }

        /**
         * Create team
         */

        try {
            const newMemberEmailsSet = new Set<string>(payload.members);

            // Create team
            const team = await createTeam({ name: payload.name, ownerId: userId });

            // Create membership for owner
            const membership = await createMembership({ email, userId, teamId: team.id });

            // Create membership for each member
            if (newMemberEmailsSet.size > 0) {
                for (const email of newMemberEmailsSet) {
                    await createMembership({ email, teamId: team.id });
                }

                await adjustSeatsCount(userId, stripeCustomerId);
            }

            // @TODO Send email notifications to members

            return {
                team,
                membership
            };
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
