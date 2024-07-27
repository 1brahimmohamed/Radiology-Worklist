import createStore from 'react-auth-kit/createStore';

/**
 * Creates a store for managing authentication state.
 *
 * @constant
 * @type {object}
 * @property {string} authName - The name of the authentication token.
 * @property {string} authType - The type of storage to use for authentication (e.g., 'localstorage').
 * @property {string} cookieDomain - The domain for the authentication cookie.
 * @property {boolean} cookieSecure - Indicates if the cookie should be secure (true if the protocol is HTTPS).
 */
const store = createStore({
    authName: '_auth',
    authType: 'localstorage',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:'
});

export default store;
