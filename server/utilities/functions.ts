import { stripe } from '~/server/utilities/stripe';
import { firebase } from '~/server/utilities/firebase';

export async function adjustSeatsCount(userId: string, stripeCustomerId: string) {
    const subscriptions = await stripe.subscriptions.list({
        customer: stripeCustomerId
    });

    const teams = await firebase.firestore.collection('teams').where('ownerId', '==', userId).get();

    console.log('Found', teams.docs.length, 'teams');

    const members = new Set();
    for (const team of teams.docs) {
        const teamId = team.id;

        const memberships = await firebase.firestore
            .collection('memberships')
            .where('teamId', '==', teamId)
            .get();

        console.log('Found', memberships.docs.length, 'memberships');

        for (const membership of memberships.docs) {
            const membershipData = membership.data();
            const userId = membershipData.userId;

            members.add(userId);
        }
    }

    const seatsCount = members.size;

    console.log('Adjusting seats count to', seatsCount);

    await stripe.subscriptions.update(subscriptions.data[0].id, {
        items: [{ id: subscriptions.data[0].items.data[0].id, quantity: seatsCount }]
    });
}
