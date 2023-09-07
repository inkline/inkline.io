import {
    firebase,
    mapFirebaseDocumentSnapshotToObject,
    mapFirebaseQuerySnapshotToArray
} from '~/server/utilities';
import { MembershipType } from '~/types';
import { Logger } from '@grozav/logger';

export async function createMembership(payload: {
    userId?: string;
    email: string;
    teamId: string;
}) {
    const membershipRef = firebase.firestore.collection('memberships');
    const membershipDoc = await membershipRef.add(payload);
    const membershipSnapshot = await membershipDoc.get();

    Logger.log('Creating membership: ', payload);

    return mapFirebaseDocumentSnapshotToObject<MembershipType, false>(membershipSnapshot);
}

export async function getMembershipByUserIdAndTeamId(userId: string, teamId: string) {
    const membershipRef = firebase.firestore.collection('memberships');
    const membershipDocs = membershipRef
        .where('userId', '==', userId)
        .where('teamId', '==', teamId);
    const membershipSnapshot = await membershipDocs.get();

    const memberships = mapFirebaseQuerySnapshotToArray<MembershipType>(membershipSnapshot);
    return memberships.length > 0 ? memberships[0] : null;
}

export async function getMembershipById(membershipId: string) {
    const membershipRef = firebase.firestore.collection('memberships');
    const membershipDoc = membershipRef.doc(membershipId);
    const membershipSnapshot = await membershipDoc.get();

    return mapFirebaseDocumentSnapshotToObject<MembershipType>(membershipSnapshot);
}

export async function getMembershipsByUserId(userId: string) {
    const membershipsRef = firebase.firestore.collection('memberships');
    const membershipsDocs = membershipsRef.where('userId', '==', userId);
    const membershipsSnapshot = await membershipsDocs.get();

    return mapFirebaseQuerySnapshotToArray<MembershipType>(membershipsSnapshot);
}

export async function getMembershipsByEmail(email: string) {
    const membershipsRef = firebase.firestore.collection('memberships');
    const membershipsDocs = membershipsRef.where('email', '==', email);
    const membershipsSnapshot = await membershipsDocs.get();

    return mapFirebaseQuerySnapshotToArray<MembershipType>(membershipsSnapshot);
}

export async function getMembershipsByTeamId(teamId: string) {
    const membershipsRef = firebase.firestore.collection('memberships');
    const membershipsDocs = membershipsRef.where('teamId', '==', teamId);
    const membershipsSnapshot = await membershipsDocs.get();

    return mapFirebaseQuerySnapshotToArray<MembershipType>(membershipsSnapshot);
}

export async function deleteMembershipById(membershipId: string) {
    const membershipRef = firebase.firestore.collection('memberships');
    const membershipDoc = membershipRef.doc(membershipId);

    Logger.log('Deleting membership: ', { membershipId });

    await membershipDoc.delete();
}

export async function deleteMembershipByEmailAndTeamId(email: string, teamId: string) {
    const membershipRef = firebase.firestore.collection('memberships');
    const membershipDoc = membershipRef
        .where('email', '==', email)
        .where('teamId', '==', teamId)
        .limit(1);
    const membershipSnapshot = await membershipDoc.get();

    Logger.log('Deleting membership: ', { email, teamId });

    await membershipSnapshot.docs[0].ref.delete();
}

export async function deleteMembershipsByTeamId(teamId: string) {
    const membershipsRef = firebase.firestore.collection('memberships');
    const membershipsDocs = membershipsRef.where('teamId', '==', teamId);
    const membershipsSnapshot = await membershipsDocs.get();

    Logger.log('Deleting memberships for team: ', { teamId });

    for (const membershipDoc of membershipsSnapshot.docs) {
        Logger.log('Deleting membership: ', membershipDoc.id);

        await membershipDoc.ref.delete();
    }
}
