import axios from 'axios';
import { Cookies } from 'react-cookie';
// import { ID_TOKEN_KEY } from '../../config/keys';

const REACT_APP_API_SERVICE = process.env.URL_API;
const cookies = new Cookies();

const getToken = () => ({
  auth: cookies.get("token")
});

export const serviceWithToken = (token = getToken()) =>
  axios.create({
    baseURL: REACT_APP_API_SERVICE,
    timeout: 60 * 4 * 1000,
    headers: {
      Authorization: 'Bearer '+token.auth,
      'Content-Type': `application/json`
    }
  });

export const serviceWithoutToken = () =>
  axios.create({
    baseURL: REACT_APP_API_SERVICE,
    timeout: 60 * 4 * 1000,
    headers: {
      'Content-Type': `application/json`
    }
  });
