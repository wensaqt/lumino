import { LOG_IN, LOG_OUT } from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isAuthenticated: true, user: action.payload };
    case LOG_OUT:
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

export default authReducer;