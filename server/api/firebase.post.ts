import { addAuthMiddleware, firebase } from '~/server/utilities';
import { defineEventHandler, setResponseStatus } from 'h3';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId } = event.context.auth.payload;

        try {
            const token = await firebase.auth.createCustomToken(userId);

            return { token };
        } catch (error) {
            setResponseStatus(event, 500);
            console.log(error);
            return {
                message: 'Something went wrong acquiring a Firebase token.',
                error
            };
        }
    })
);
