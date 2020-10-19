import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUser } from '../model/user';

let mock = new MockAdapter(axios);

mock.onPost('/api/signin').reply((config) => {
  let { username, password } = JSON.parse(config.data);
  return new Promise((resolve) => {
    let user = null;
    setTimeout(() => {
      let hasUser = LoginUser.some((userItem) => {
        if (userItem.username === username && userItem.password === password) {
          user = JSON.parse(JSON.stringify(userItem));
          user.password = undefined;
          return true;
        }
      });

      if (hasUser) {
        resolve([200, { code: 200, msg: 'Success', user }]);
      } else {
        resolve([200, { code: 500, msg: 'Fail' }]);
      }
    }, 1000);
  });
});
