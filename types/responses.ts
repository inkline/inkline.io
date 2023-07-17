import { Stripe } from 'stripe';

export interface SubscriptionDataEntryType {
    id: string;
    price: string;
    quantity: number;
    product: string;
}

export interface SubscriptionType {
    id: string;
    status: Stripe.Subscription.Status;
    data: SubscriptionDataEntryType[];
}

export interface ProductPriceType {
    id: string;
    currency: string;
    unit_amount: number;
    recurring: {
        interval: string;
    };
}

export interface ProductType {
    id: string;
    name: string;
    prices: ProductPriceType[];
}

export interface TeamType {
    id: string;
    name: string;
    ownerId: string;
}

export interface MembershipType {
    id: string;
    userId: string;
    teamId: string;
}

export type StripeSubscriptionsGetResponse = SubscriptionType[];
export type StripeProductsGetResponse = ProductType[];
export type TeamsGetResponse = TeamType[];
export type TeamsPostResponse = {
    team: TeamType;
    membership: MembershipType;
};
export type TeamsEstimatePostResponse = ProductPriceType & { quantity_diff: number };
