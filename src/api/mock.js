import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
//import { LoginUser } from '../model/user';

const mock = new MockAdapter(axios);

mock.onPost('/api/login').reply((req) => {
  //const { username, password } = JSON.parse(req.data);
  return new Promise((resolve, reject) => {
    //let user = null;

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

//     setTimeout(() => {
//       let hasUser = LoginUser.some((userItem) => {
//         if (userItem.username === username && userItem.password === password) {
//           user = JSON.parse(JSON.stringify(userItem));
//           //user.password = undefined;
//           return true;
//         }
//       });
//       console.log(user);

//       if (hasUser) {
//         resolve([200, { code: 200, msg: 'Success', user }]);
//       } else {
//         resolve([500, { code: 500, msg: 'Fail' }]);
//       }
//     }, 1000);
//   });
// });

export { axios, mock };
