import type { Stripe } from 'stripe';
import type { User } from '@auth0/auth0-vue';

export type UserType = User;

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

export interface MembershipType {
    id: string;
    email: UserType['email'];
    userId: UserType['id'];
    teamId: TeamType['id'];
    teamName: TeamType['name'];
}

export interface TeamType {
    id: string;
    name: string;
    ownerId: UserType['id'];
}

export interface NonceType {
    id: string;
    userId: UserType['id'];
    teamId?: TeamType['id'];
    nonce: string;
}

export type StripeSubscriptionsGetResponse = SubscriptionType[];
export type StripeProductsGetResponse = ProductType[];

export type TeamsGetResponse = {
    teams: TeamType[];
    memberships: MembershipType[];
    invites: MembershipType[];
};
export type TeamsPostResponse = {
    team: TeamType;
    membership: MembershipType;
};
export type TeamsPutResponse = {
    team: TeamType;
    memberships: MembershipType[];
};
export type TeamGetResponse = {
    team: TeamType;
    memberships: MembershipType[];
};
export type TeamsEstimatePostResponse = ProductPriceType & { quantity_diff: number };

export type TokenGetResponse = {
    token: string;
};
