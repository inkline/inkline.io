import { addAuthMiddleware, firebase } from '~/server/utilities';
import { defineEventHandler } from 'h3';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId } = event.context.auth.payload;

        try {
            return [];
        } catch (err) {
            setResponseStatus(event, 500);

            return {
                message: 'Something went wrong acquiring a Firebase token.',
                error: err
            };
        }
    })
);
