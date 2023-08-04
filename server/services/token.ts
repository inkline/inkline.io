import {
    firebase,
    mapFirebaseDocumentSnapshotToObject,
    mapFirebaseQuerySnapshotToArray
} from '~/server/utilities';
import type { NonceType } from '~/types';

export async function createNonce(userId: string, teamId?: string) {
    const nonce = `${new Date().getTime()}-${Math.random().toString(36).substring(2, 15)}`;
    const noncesRef = firebase.firestore.collection('nonces');
    const nonceDoc = await noncesRef.add({
        nonce,
        userId,
        ...(teamId ? { teamId } : {})
    });
    const nonceSnapshot = await nonceDoc.get();

    return mapFirebaseDocumentSnapshotToObject<NonceType>(nonceSnapshot);
}

export async function updateNonceById(nonceId: string) {
    const nonce = `${new Date().getTime()}-${Math.random().toString(36).substring(2, 15)}`;
    const noncesRef = firebase.firestore.collection('nonces');
    const nonceDoc = noncesRef.doc(nonceId);

    await nonceDoc.update({ nonce });

    const nonceSnapshot = await nonceDoc.get();
    return mapFirebaseDocumentSnapshotToObject<NonceType>(nonceSnapshot);
}

export async function getNonceByUserIdAndTeamId(userId: string, teamId?: string) {
    const noncesRef = firebase.firestore.collection('nonces');
    const noncesDocs = teamId
        ? noncesRef.where('userId', '==', userId).where('teamId', '==', teamId)
        : noncesRef.where('userId', '==', userId).where('teamId', '==', null);
    const noncesSnapshot = await noncesDocs.get();
    const nonces = mapFirebaseQuerySnapshotToArray<NonceType>(noncesSnapshot);

    if (nonces.length > 0) {
        return nonces[0];
    }

    return createNonce(userId, teamId);
}
