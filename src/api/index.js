/* eslint-disable no-useless-catch */
import { axios } from './mock';

export const authorizer = async (username, password) => {
  try {
    return await BackendAPIS.userLogin(username, password);
  } catch (e) {
    throw e;
  }
};

export class BackendAPIS {
  static userLogin(username, password) {
    const req = {
      username,
      password,
    };
    return axios.post('api/login', req);
  }
}
