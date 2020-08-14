import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

import auth0 from '../../utils/auth0';

const USER_INFO_ENDPOINT = `https://${process.env.AUTH0_DOMAIN}/userinfo`

export default async function(req, res) {
  const tokenCache = await auth0.tokenCache(req, res);
  const { accessToken } = await tokenCache.getAccessToken();

  axios({
    method: 'get',
    url: USER_INFO_ENDPOINT,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(
    ({data}) => res.send(data),
    err => res.send(err))
};
  