import {
    firebase,
    mapFirebaseDocumentSnapshotToObject,
    mapFirebaseQuerySnapshotToArray
} from '~/server/utilities';
import { TeamType } from '~/types';
import { Logger } from '@grozav/logger';

export async function createTeam(payload: { name: string; ownerId: string }) {
    const teamsRef = firebase.firestore.collection('teams');
    const teamDoc = await teamsRef.add(payload);
    const teamSnapshot = await teamDoc.get();

    Logger.log('Creating team: ', payload);

    return mapFirebaseDocumentSnapshotToObject<TeamType, false>(teamSnapshot);
}

export async function getTeamById(teamId: string) {
    const teamsRef = firebase.firestore.collection('teams');
    const teamDoc = teamsRef.doc(teamId);
    const teamSnapshot = await teamDoc.get();

    if (!teamSnapshot.exists) {
        return null;
    }

    return mapFirebaseDocumentSnapshotToObject<TeamType>(teamSnapshot);
}

export async function getTeamsOwnedByUser(userId: string) {
    const teamsRef = firebase.firestore.collection('teams');
    const teamsDocs = teamsRef.where('ownerId', '==', userId);
    const teamsSnapshot = await teamsDocs.get();

    return mapFirebaseQuerySnapshotToArray<TeamType>(teamsSnapshot);
}

export async function updateTeamById(teamId: string, payload: { name: string }) {
    const teamsRef = firebase.firestore.collection('teams');
    const teamDoc = teamsRef.doc(teamId);

    Logger.log('Updating team: ', teamId, payload);

    return teamDoc.update(payload);
}

export async function deleteTeamById(teamId: string) {
    const teamsRef = firebase.firestore.collection('teams');
    const teamsDoc = teamsRef.doc(teamId);

    Logger.log('Deleting team: ', teamId);

    return teamsDoc.delete();
}
