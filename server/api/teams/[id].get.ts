import { addAuthMiddleware, firebase, auth0 } from '~/server/utilities';
import { defineEventHandler, setResponseStatus } from 'h3';
import type { MembershipType, TeamGetResponse } from '~/types';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId } = event.context.auth.payload;
        const teamId = event.context.params?.id;

        if (!teamId) {
            setResponseStatus(event, 400);
            return {
                message: 'Missing team ID.'
            };
        }

        try {
            const membershipRef = firebase.firestore.collection('memberships');
            const membershipSnapshot = await membershipRef
                .where('userId', '==', userId)
                .where('teamId', '==', teamId)
                .get();

            if (membershipSnapshot.docs.length === 0) {
                setResponseStatus(event, 404);
                return {
                    message: 'Team not found.'
                };
            }

            const teamsRef = firebase.firestore.collection('teams');
            const teamDoc = teamsRef.doc(teamId);
            const teamSnapshot = await teamDoc.get();
            const teamData = teamSnapshot.data();
            const teamMembershipsSnapshot = await membershipRef.where('teamId', '==', teamId).get();

            const memberships: TeamGetResponse['memberships'] = [];
            for (const teamMembershipDoc of teamMembershipsSnapshot.docs) {
                const teamMembershipData = teamMembershipDoc.data();

                memberships.push({
                    id: teamMembershipDoc.id,
                    ...teamMembershipData
                } as MembershipType);
            }

            return {
                team: {
                    id: teamDoc.id,
                    ...teamData
                },
                memberships
            };
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
