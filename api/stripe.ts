import { post, useGet } from '~/api/generic';
import type { Stripe } from 'stripe';

export async function createCheckoutSession(price: Stripe.Price) {
    return post('/api/stripe/checkout', {
        price
    });
}

export async function createCustomerPortalSession() {
    return post('/api/stripe/customer-portal');
}

export async function useGetPrices() {
    return useGet('/api/stripe/prices', {
        transform: (prices) => {
            return (prices as Stripe.Price[]).reduce<Record<string, Stripe.Price>>((acc, price) => {
                acc[price.recurring?.interval || ''] = price;
                return acc;
            }, {});
        }
    });
}
