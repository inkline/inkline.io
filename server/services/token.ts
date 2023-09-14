import {
    firebase,
    mapFirebaseDocumentSnapshotToObject,
    mapFirebaseQuerySnapshotToArray
} from '~/server/utilities';
import type { NonceType } from '~/types';
import { Logger } from '@grozav/logger';
import jwt from 'jsonwebtoken';

function getRandomNonce(): string {
    return `${new Date().getTime()}-${Math.random().toString(36).substring(2, 15)}`;
}

export async function createNonce(userId: string, teamId?: string) {
    const nonce = getRandomNonce();
    const noncesRef = firebase.firestore.collection('nonces');
    const nonceDoc = await noncesRef.add({
        nonce,
        userId,
        ...(teamId ? { teamId } : {})
    });
    const nonceSnapshot = await nonceDoc.get();

    Logger.log('Creating nonce: ', { userId, teamId });

    return mapFirebaseDocumentSnapshotToObject<NonceType>(nonceSnapshot);
}

export async function updateNonceById(nonceId: string) {
    const nonce = getRandomNonce();
    const noncesRef = firebase.firestore.collection('nonces');
    const nonceDoc = noncesRef.doc(nonceId);

    await nonceDoc.update({ nonce });

    Logger.log('Updating nonce: ', { nonceId });

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

export function createJWT(nonce: string, userId: string, teamId?: string) {
    const secret = process.env.NUXT_VERDACCIO_SECRET_KEY as string;
    const payload = {
        userId,
        nonce,
        ...(teamId ? { teamId } : {})
    };

    return jwt.sign(payload, secret, {});
}
