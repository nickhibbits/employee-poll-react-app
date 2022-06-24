import { SET_AUTH } from "../actions/auth";

export default function auth(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.auth,
      };
    default:
      return state;
  }
}
