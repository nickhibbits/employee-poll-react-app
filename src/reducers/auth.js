import { SET_AUTH } from "../actions/auth";

export default function auth(state = {}, action) {
  const signedIn = action.auth;
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        signedIn,
      };
    default:
      return state;
  }
}
