import { addAuthMiddleware, stripe } from '~/server/utilities';
import { defineEventHandler } from 'h3';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const stripeCustomerId = event.context.auth.payload.stripe_customer_id;
        const payload = await readBody(event);

        const session = await stripe.checkout.sessions.create({
            customer: stripeCustomerId,
            success_url: `${process.env.NUXT_PUBLIC_SITE_URL}/checkout/success`,
            cancel_url: `${process.env.NUXT_PUBLIC_SITE_URL}/pricing`,
            payment_method_types: ['card'],
            line_items: [
                {
                    price: payload.price.id,
                    quantity: payload.quantity || 1,
                    adjustable_quantity: {
                        enabled: true
                    }
                }
            ],
            mode: 'subscription'
        });

        return {
            session: {
                id: session.id,
                url: session.url
            }
        };
    })
);
