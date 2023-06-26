import { addAuthMiddleware, stripe } from '~/server/utilities';
import { defineEventHandler } from 'h3';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const stripeCustomerId = event.context.auth.payload.stripe_customer_id;

        const session = await stripe.billingPortal.sessions.create({
            customer: stripeCustomerId
        });

        return {
            session: {
                url: session.url
            }
        };
    })
);
