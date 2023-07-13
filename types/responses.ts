import { Stripe } from 'stripe';

export type StripeSubscriptionsResponse = Array<{
    id: string;
    status: Stripe.Subscription.Status;
    data: Array<{
        id: string;
        price: string;
        quantity: number;
        product: string;
    }>;
}>;

export type StripeProductsResponse = Array<{
    id: string;
    name: string;
    prices: Array<{
        id: string;
        currency: string;
        unit_amount: number;
        recurring: {
            interval: string;
        };
    }>;
}>;

export type StripeTeamsResponse = Array<{
    id: string;
    name: string;
    ownerId: string;
}>;
