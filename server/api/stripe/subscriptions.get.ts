import { addAuthMiddleware, stripe } from '~/server/utilities';
import { defineEventHandler } from 'h3';
import type { StripeSubscriptionsResponse } from '~/types';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const stripeCustomerId = event.context.auth.payload.stripe_customer_id;
        const subscriptions = await stripe.subscriptions.list({
            customer: stripeCustomerId
        });

        return subscriptions.data.map((subscription) => ({
            id: subscription.id,
            status: subscription.status,
            data: subscription.items.data.map((item) => ({
                id: item.id,
                price: item.price.id,
                quantity: item.quantity,
                product: item.price.product
            }))
        })) as StripeSubscriptionsResponse;
    })
);
