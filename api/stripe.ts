import { get, post, useGet } from '~/api/generic';
import type { Stripe } from 'stripe';
import type { StripeSubscriptionsResponse } from '~/types';

export async function createCheckoutSession(price: Stripe.Price) {
    return post<{ session: { url: string } }>('/api/stripe/checkout', {
        price
    });
}

export async function createCustomerPortalSession() {
    return get<{ session: { url: string } }>('/api/stripe/customer-portal');
}

export async function getSubscriptions() {
    return get<StripeSubscriptionsResponse>('/api/stripe/subscriptions');
}

export async function useGetProducts() {
    return useGet('/api/stripe/products');
}
