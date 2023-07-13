import { stripe } from '~/server/utilities';
import { defineEventHandler } from 'h3';
import type { StripeProductsResponse } from '~/types';

export default defineEventHandler(async () => {
    const data: StripeProductsResponse = [];
    const products = await stripe.products.list();

    for (const product of products.data) {
        const prices = await stripe.prices.list({
            product: product.id
        });

        data.push({
            id: product.id,
            name: product.name,
            prices: prices.data.map((price) => ({
                id: price.id,
                currency: price.currency,
                unit_amount: price.unit_amount,
                recurring: {
                    interval: price.recurring?.interval
                }
            })) as StripeProductsResponse[0]['prices']
        });
    }

    return data;
});
