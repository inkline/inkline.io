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

export async function adjustSeatsCount(userId: string, stripeCustomerId: string) {
    const { seats } = await getSeats(userId);
    const seatsCount = seats.size;

    const subscriptions = await stripe.subscriptions.list({
        customer: stripeCustomerId
    });

    await stripe.subscriptions.update(subscriptions.data[0].id, {
        items: [{ id: subscriptions.data[0].items.data[0].id, quantity: seatsCount }]
    });
}
