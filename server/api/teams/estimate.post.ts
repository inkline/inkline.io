import { addAuthMiddleware, getSeats, stripe } from '~/server/utilities';
import { defineEventHandler, setResponseStatus } from 'h3';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId } = event.context.auth.payload;
        const stripeCustomerId = event.context.auth.payload.stripe_customer_id;
        const payload = await readBody(event);

        try {
            const getSeatsOptions: Parameters<typeof getSeats>[1] = {};
            if (payload.team) {
                getSeatsOptions.exclude = [payload.team];
            }

            const seats = await getSeats(userId, getSeatsOptions);

            const currentSeatsCount = seats.size;
            payload.members.forEach((member: string) => seats.add(member));
            const newSeatsCount = seats.size;

            const subscriptions = await stripe.subscriptions.list({
                customer: stripeCustomerId
            });

            return {
                ...subscriptions.data[0].items.data[0],
                quantity_diff: newSeatsCount - currentSeatsCount
            };
        } catch (error) {
            setResponseStatus(event, 500);
            console.log(error);

            return {
                message: 'Something went wrong when retrieving teams.',
                error
            };
        }
    })
);
