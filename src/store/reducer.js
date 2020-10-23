import { LOGIN_REQUEST, LOGIN_SUCCESS } from './actions';

const reducer = (state = '', action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { username: action.username, password: action.password };
    case LOGIN_SUCCESS:
      return { username: action.username, password: action.password };

    default:
      return state;
  }
};

export default reducer;
