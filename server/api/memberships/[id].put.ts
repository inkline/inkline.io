import { addAuthMiddleware, firebase } from '~/server/utilities';
import {
    updateSubscription,
    createMembership,
    deleteMembershipById,
    getMembershipsByTeamId,
    getTeamById,
    updateTeamById,
    getMembershipById,
    updateMembershipById
} from '~/server/services';
import { defineEventHandler, setResponseStatus } from 'h3';
import { MembershipPutResponse, TeamsPutResponse } from '~/types';

export default addAuthMiddleware(
    defineEventHandler(async (event) => {
        const { sub: currentUserId, email: currentUserEmail } = event.context.auth.payload;
        const payload = await readBody(event);
        const membershipId = event.context.params?.id;

        /**
         * Data validation
         */

        if (!membershipId) {
            setResponseStatus(event, 400);
            return {
                message: 'Missing membership ID.'
            };
        }

        try {
            const membership = await getMembershipById(membershipId);
            if (!membership) {
                setResponseStatus(event, 404);
                return {
                    message: 'Membership not found.'
                };
            }

            /**
             * Permissions validation
             */

            if (membership?.email !== currentUserEmail) {
                setResponseStatus(event, 403);
                return {
                    message: 'You are not the owner of this membership.'
                };
            }

            /**
             * Update membership
             */

            if (payload.accept) {
                await updateMembershipById(membershipId, {
                    email: currentUserEmail,
                    userId: currentUserId
                });
                const updatedMembership = await getMembershipById(membershipId);

                return {
                    membership: updatedMembership
                } as MembershipPutResponse;
            } else {
                await deleteMembershipById(membershipId);

                return {} as MembershipPutResponse;
            }
        } catch (error) {
            setResponseStatus(event, 500);
            console.log(error);
            return {
                message: 'Something went wrong when updating invitation status.',
                error
            };
        }
    })
);
