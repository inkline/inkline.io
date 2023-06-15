import { stripe } from '~/server/utilities';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
    const prices = await stripe.prices.list();

    return prices.data;
});
