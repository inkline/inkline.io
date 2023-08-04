import { stripe } from '~/server/utilities';
import { defineEventHandler } from 'h3';
import type { StripeProductsGetResponse } from '~/types';

const pricesBlocklist = ['Inkline Enterprise'];

export default defineEventHandler(async () => {
    const data: StripeProductsGetResponse = [];
    const products = await stripe.products.list();

    for (const product of products.data) {
        const prices = await stripe.prices.list({
            product: product.id
        });

        data.push({
            id: product.id,
            name: product.name,
            prices: pricesBlocklist.includes(product.name)
                ? []
                : (prices.data.map((price) => ({
                      id: price.id,
                      currency: price.currency,
                      unit_amount: price.unit_amount,
                      recurring: {
                          interval: price.recurring?.interval
                      }
                  })) as StripeProductsGetResponse[0]['prices'])
        });
    }

    return data;
});
