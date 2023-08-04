import { stripe } from '~/server/utilities';
import { getTeamsOwnedByUser } from '~/server/services/teams';
import { getMembershipsByTeamId } from '~/server/services/memberships';

export async function customerHasActiveSubscription(stripeCustomerId: string) {
    const subscriptions = await stripe.subscriptions.list({
        customer: stripeCustomerId
    });

    return subscriptions.data.some((subscription) => subscription.status === 'active');
}

export async function getSeats(userId: string, options: { exclude?: string[] } = {}) {
    const rawSeats = new Set<string>();
    const seats = new Set<string>();

    const teams = await getTeamsOwnedByUser(userId);
    for (const team of teams) {
        const memberships = await getMembershipsByTeamId(team.id);

        for (const membership of memberships) {
            const email = membership.email as string;

            rawSeats.add(email);
            if (!options.exclude?.includes(team.id)) {
                seats.add(email);
            }
        }
    }

    return { rawSeats, seats };
}

export async function getSubscriptionsByCustomerId(stripeCustomerId: string) {
    const subscriptions = await stripe.subscriptions.list({
        customer: stripeCustomerId
    });

    return subscriptions.data;
}

export async function getProductByName(name: string) {
    const products = await stripe.products.list();
    return products.data.find((product) => product.name === name);
}

export async function getSubscriptionByProductId(stripeCustomerId: string, productId: string) {
    const subscriptions = await getSubscriptionsByCustomerId(stripeCustomerId);
    return subscriptions.find((subscription) =>
        subscription.items.data.some((item) => item.plan.product === productId && item.plan.active)
    );
}

export async function hasEnterpriseSubscription(stripeCustomerId: string) {
    const enterpriseProduct = await getProductByName('Inkline Enterprise');
    const subscription = await getSubscriptionByProductId(
        stripeCustomerId,
        enterpriseProduct?.id as string
    );

    return !!subscription;
}

export async function updateSubscription(userId: string, stripeCustomerId: string) {
    const isEnterprise = await hasEnterpriseSubscription(stripeCustomerId);
    if (isEnterprise) {
        return;
    }

    const subscriptions = await getSubscriptionsByCustomerId(stripeCustomerId);
    const { seats } = await getSeats(userId);
    const seatsCount = seats.size;

    await stripe.subscriptions.update(subscriptions[0].id, {
        items: [{ id: subscriptions[0].items.data[0].id, quantity: seatsCount }]
    });
}
