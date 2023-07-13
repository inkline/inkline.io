import { jwtVerifier, getToken, JwtVerifierOptions } from 'express-oauth2-jwt-bearer';
import { defineEventHandler, EventHandler } from 'h3';
import jwks from 'jwks-rsa';

export const createAuthMiddleware = (options: JwtVerifierOptions) => {
    const verifyJwt = jwtVerifier(options);

    return (handler: EventHandler) =>
        defineEventHandler(async (event) => {
            const headers = getHeaders(event);
            const query = getQuery(event);
            const body = event.node.req.method === 'GET' ? undefined : await readBody(event);

            const jwt = getToken(headers, query, body, false);
            event.context.auth = await verifyJwt(jwt);

            try {
                return await handler(event);
            } catch (err) {
                setResponseStatus(event, 500);
                return { error: (err as Error).toString() };
            }
        });
};

export const addAuthMiddleware = createAuthMiddleware({
    audience: process.env.NUXT_PUBLIC_AUTH0_AUDIENCE as string,
    issuerBaseURL: process.env.NUXT_PUBLIC_AUTH0_ISSUER_BASE_URL as string,
    tokenSigningAlg: 'RS256',
    jwksUri: `https://${process.env.NUXT_PUBLIC_AUTH0_DOMAIN}/.well-known/jwks.json`
});
