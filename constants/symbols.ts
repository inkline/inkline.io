import type { InjectionKey } from 'vue';
import type { Auth0Client } from '@auth0/auth0-spa-js';

export const AUTH0_SYMBOL = Symbol('auth0') as InjectionKey<Auth0Client>;
