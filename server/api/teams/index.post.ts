import { addAuthMiddleware, adjustSeatsCount, firebase, stripe } from '~/server/utilities';
import { defineEventHandler, setResponseStatus } from 'h3';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId, email } = event.context.auth.payload;
        const stripeCustomerId = event.context.auth.payload.stripe_customer_id;
        const payload = await readBody(event);

        if (!payload.name) {
            setResponseStatus(event, 400);
            return {
                message: 'Missing team name data.'
            };
        }

        if (!payload.members || !Array.isArray(payload.members)) {
            setResponseStatus(event, 400);
            return {
                message: 'Missing team members data.'
            };
        }

        const subscriptions = await stripe.subscriptions.list({
            customer: stripeCustomerId
        });

        try {
            const hasActiveSubscription = subscriptions.data.some(
                (subscription) => subscription.status === 'active'
            );
            if (!hasActiveSubscription) {
                setResponseStatus(event, 405);
                return {
                    message: 'Subscription is required to create a team.'
                };
            }
        } catch (error) {
            setResponseStatus(event, 500);
            return {
                message: 'Something went wrong when checking subscription status.'
            };
        }

        try {
            const teamsRef = firebase.firestore.collection('teams');
            const teamDoc = await teamsRef.add({
                name: payload.name,
                ownerId: userId
            });
            const teamSnapshot = await teamDoc.get();
            const teamData = teamSnapshot.data();

            // Create membership for owner
            const membershipRef = firebase.firestore.collection('memberships');
            const membershipDoc = await membershipRef.add({
                email,
                userId,
                teamId: teamDoc.id
            });
            const membershipSnapshot = await membershipDoc.get();
            const membershipData = membershipSnapshot.data();

            // Create membership for each member
            if (payload.members.length > 0) {
                for (const member of payload.members) {
                    await membershipRef.add({
                        email: member,
                        teamId: teamDoc.id
                    });
                }

                await adjustSeatsCount(userId, stripeCustomerId);
            }

            // @TODO Send email notifications to members

            return {
                team: {
                    id: teamDoc.id,
                    ...teamData
                },
                membership: {
                    id: membershipDoc.id,
                    ...membershipData
                }
            };
        } catch (error) {
            setResponseStatus(event, 500);
            console.log(error);

            return {
                message: 'Something went wrong when creating a team.',
                error
            };
        }
    })
);
