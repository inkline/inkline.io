import { auth0, firebase, mapFirebaseDocumentSnapshotToObject } from '~/server/utilities';
import { Logger } from '@grozav/logger';
import { FirebaseUserType } from '~/types';

export async function getAuth0UserById(id: string) {
    return auth0.getUser({ id });
}

export async function createUserIfNotExists(payload: { userId: string; stripeCustomerId: string }) {
    const user = await getUserById(payload.userId);
    if (!user) {
        return createUser(payload);
    }

    return user;
}

export async function createUser(payload: { userId: string; stripeCustomerId: string }) {
    const usersRef = firebase.firestore.collection('users');
    const userDoc = await usersRef.doc(payload.userId);
    await userDoc.set({
        id: payload.userId,
        stripeCustomerId: payload.stripeCustomerId
    });
    const userSnapshot = await userDoc.get();

    Logger.log('Creating user: ', payload);

    return mapFirebaseDocumentSnapshotToObject<FirebaseUserType>(userSnapshot);
}

export async function getUserById(userId: string) {
    const userRef = firebase.firestore.collection('users');
    const userDoc = userRef.doc(userId);
    const userSnapshot = await userDoc.get();

    return mapFirebaseDocumentSnapshotToObject<FirebaseUserType>(userSnapshot);
}
