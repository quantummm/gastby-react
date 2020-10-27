import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
//import { LoginUser } from '../model/user';

const mock = new MockAdapter(axios);

mock.onPost('/api/login').reply((req) => {
  return new Promise((resolve, reject) => {
    let response;

    const matchedResponse = JSON.parse(req.data);
    response = matchedResponse
      ? [
          200,
          {
            code: 200,
            msg: 'Success',
            user: matchedResponse,
          },
        ]
      : [
          500,
          {
            code: 500,
            msg: 'Internal Server Error',
            user: null,
          },
        ];

    setTimeout(() => {
      if (response[0] === 200) {
        resolve(response);
      } else {
        reject(response);
      }
    }, Math.floor(200 + Math.random() * 800));
  });
});

export { axios, mock };
