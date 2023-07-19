import { addAuthMiddleware, firebase } from '~/server/utilities';
import { defineEventHandler, setResponseStatus } from 'h3';
import type { TeamsGetResponse } from '~/types';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId, email } = event.context.auth.payload;

        try {
            const membershipRef = firebase.firestore.collection('memberships');
            const teamsRef = firebase.firestore.collection('teams');

            const membershipsSnapshot = await membershipRef.where('userId', '==', userId).get();
            const invitesSnapshot = await membershipRef.where('email', '==', email).get();

            const response: TeamsGetResponse = {
                teams: [],
                memberships: [],
                invites: []
            };

            for (const membershipDoc of membershipsSnapshot.docs) {
                const membershipData = membershipDoc.data();
                const teamDoc = await teamsRef.doc(membershipData.teamId).get();
                const teamData = teamDoc.data()!;

                response.teams.push({
                    id: teamDoc.id,
                    ...teamData
                } as TeamsGetResponse['teams'][0]);

                response.memberships.push({
                    id: membershipDoc.id,
                    ...membershipData
                } as TeamsGetResponse['memberships'][0]);
            }

            for (const inviteDoc of invitesSnapshot.docs) {
                const inviteData = inviteDoc.data();
                if (inviteData.userId) {
                    continue;
                }

                const teamDoc = await teamsRef.doc(inviteData.teamId).get();
                const teamData = teamDoc.data()!;

                response.teams.push({
                    id: teamDoc.id,
                    ...teamData
                } as TeamsGetResponse['teams'][0]);

                response.invites.push({
                    id: inviteDoc.id,
                    ...inviteData
                } as TeamsGetResponse['invites'][0]);
            }

            return response;
        } catch (error) {
            setResponseStatus(event, 500);
            console.log(error);

            return {
                message: 'Something went wrong when retrieving teams.',
                error
            };
        }
    })
);
