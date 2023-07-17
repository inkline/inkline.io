import { addAuthMiddleware, firebase } from '~/server/utilities';
import { defineEventHandler, setResponseStatus } from 'h3';
import type { TeamsGetResponse } from '~/types';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: userId } = event.context.auth.payload;

        try {
            const membershipRef = firebase.firestore.collection('memberships');
            const membershipSnapshot = await membershipRef.where('userId', '==', userId).get();

            const results: TeamsGetResponse = [];
            for (const membership of membershipSnapshot.docs) {
                const membershipData = membership.data();
                const teamId = membershipData.teamId;

                const teamRef = firebase.firestore.collection('teams').doc(teamId);
                const teamSnapshot = await teamRef.get();

                results.push({
                    id: teamId,
                    ...teamSnapshot.data()
                } as TeamsGetResponse[0]);
            }

            return results;
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
