import { jwtVerifier, getToken, JwtVerifierOptions } from 'express-oauth2-jwt-bearer';
import { defineEventHandler, EventHandler } from 'h3';

export const createAuthMiddleware = (options: JwtVerifierOptions) => {
    const verifyJwt = jwtVerifier(options);

    return (handler: EventHandler) =>
        defineEventHandler(async (event) => {
            const headers = getHeaders(event);
            const query = getQuery(event);
            const body = await readBody(event);

            const jwt = getToken(headers, query, body, false);
            event.context.auth = await verifyJwt(jwt);

            try {
                const response = await handler(event);
                return { response };
            } catch (err) {
                return { err };
            }
        });
};

export const addAuthMiddleware = createAuthMiddleware({
    audience: process.env.NUXT_PUBLIC_AUTH0_AUDIENCE as string,
    issuerBaseURL: process.env.NUXT_PUBLIC_AUTH0_ISSUER_BASE_URL as string,
    tokenSigningAlg: 'RS256'
});
