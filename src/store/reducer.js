import * as actionTypes from '../constants/actionConstants';

const defaultState = {
  username: '',
  password: '',
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USERNAME:
      return { ...state, username: action.data };
    case actionTypes.CURRENT_USER:
      return { ...state, username: action.data };

    default:
      return state;
  }
};

export default reducer;
