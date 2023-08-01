import { firebase } from '~/server/utilities';
import { TeamType } from '~/types';

export async function createTeam(payload: { name: string; ownerId: string }) {
    const teamsRef = firebase.firestore.collection('teams');
    const teamDoc = await teamsRef.add(payload);

    return {
        id: teamDoc.id,
        ...payload
    } as TeamType;
}

export async function getTeamById(teamId: string) {
    const teamsRef = firebase.firestore.collection('teams');
    const teamDoc = teamsRef.doc(teamId);
    const teamSnapshot = await teamDoc.get();

    if (!teamSnapshot.exists) {
        return null;
    }

    return {
        id: teamDoc.id,
        ...teamSnapshot.data()
    } as TeamType;
}

export async function getTeamsOwnedByUser(userId: string) {
    const teamsRef = firebase.firestore.collection('teams');
    const teamsDocs = teamsRef.where('ownerId', '==', userId);
    const teamsSnapshot = await teamsDocs.get();

    const teams: TeamType[] = [];
    for (const teamDoc of teamsSnapshot.docs) {
        teams.push({
            id: teamDoc.id,
            ...teamDoc.data()
        } as TeamType);
    }

    return teams;
}

export async function updateTeamById(teamId: string, payload: { name: string }) {
    const teamsRef = firebase.firestore.collection('teams');
    const teamDoc = teamsRef.doc(teamId);

    return teamDoc.update(payload);
}

export async function deleteTeamById(teamId: string) {
    const teamsRef = firebase.firestore.collection('teams');
    const teamsDoc = teamsRef.doc(teamId);

    return teamsDoc.delete();
}
