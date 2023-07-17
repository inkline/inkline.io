import { stripe } from '~/server/utilities/stripe';
import { firebase } from '~/server/utilities/firebase';

export async function getSeats(userId: string, options: { exclude?: string[] } = {}) {
    const teams = await firebase.firestore.collection('teams').where('ownerId', '==', userId).get();

    const members = new Set<string>();
    for (const team of teams.docs) {
        const teamId = team.id;

        if (options.exclude?.includes(teamId)) {
            continue;
        }

        const memberships = await firebase.firestore
            .collection('memberships')
            .where('teamId', '==', teamId)
            .get();

        for (const membership of memberships.docs) {
            const membershipData = membership.data();
            const userId = membershipData.userId;

            members.add(userId);
        }
    }

    return members;
}

export async function adjustSeatsCount(userId: string, stripeCustomerId: string) {
    const seats = await getSeats(userId);
    const seatsCount = seats.size;

    const subscriptions = await stripe.subscriptions.list({
        customer: stripeCustomerId
    });

    await stripe.subscriptions.update(subscriptions.data[0].id, {
        items: [{ id: subscriptions.data[0].items.data[0].id, quantity: seatsCount }]
    });
}
