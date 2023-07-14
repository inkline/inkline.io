import firebaseAdmin, { ServiceAccount } from 'firebase-admin';

const firebaseServiceAccount = JSON.parse(atob(process.env.NUXT_FIREBASE_CERTIFICATE_BASE64 || ''));

const app = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaseServiceAccount as ServiceAccount),
    databaseURL: `https://${firebaseServiceAccount.project_id}.firebaseio.com`
});

export const firebase = {
    app,
    auth: firebaseAdmin.auth(),
    database: firebaseAdmin.database()
};
