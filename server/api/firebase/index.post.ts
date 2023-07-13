import { addAuthMiddleware } from '~/server/utilities';
import { defineEventHandler } from 'h3';
import firebaseAdmin, { ServiceAccount } from 'firebase-admin';
import firebaseServiceAccount from '../../certificates/firebase.json';

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaseServiceAccount as ServiceAccount),
    databaseURL: `https://${firebaseServiceAccount.project_id}.firebaseio.com`
});

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId } = event.context.auth.payload;

        try {
            const token = await firebaseAdmin.auth().createCustomToken(userId);

            return { token };
        } catch (err) {
            setResponseStatus(event, 500);

            return {
                message: 'Something went wrong acquiring a Firebase token.',
                error: err
            };
        }
    })
);
