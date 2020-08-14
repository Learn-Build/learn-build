import { initAuth0 } from '@auth0/nextjs-auth0';
import dotenv from 'dotenv'
dotenv.config()

const isDevMode = process.env.VERCEL_URL === undefined
console.log(process.env.VERCEL_URL)
export default initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'openid profile email',
  redirectUri: isDevMode ? 'http://localhost:3000/api/callback' : `http://${process.env.VERCEL_URL}/api/callback`,
  postLogoutRedirectUri: isDevMode ? 'http://localhost:3000/' : `http://${process.env.VERCEL_URL}/`,
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.SECRET,
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: 60 * 60 * 8,
    // (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.
    cookieDomain: '',
    // (Optional) SameSite configuration for the session cookie. Defaults to 'lax', but can be changed to 'strict' or 'none'. Set it to false if you want to disable the SameSite setting.
    cookieSameSite: 'lax',
    // (Optional) Store the id_token in the session. Defaults to false.
    storeIdToken: false,
    // (Optional) Store the access_token in the session. Defaults to false.
    storeAccessToken: true,
    // (Optional) Store the refresh_token in the session. Defaults to false.
    storeRefreshToken: false
  },
  oidcClient: {
    // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
    httpTimeout: 2500,
    // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
    clockTolerance: 10000
  }
});