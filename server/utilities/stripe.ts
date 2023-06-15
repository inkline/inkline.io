import Stripe from 'stripe';

export const stripe = new Stripe(process.env.NUXT_STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15'
});
