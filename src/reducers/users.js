import { ADD_USER_ANSWER, RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  console.log("state", state);
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_ANSWER:
      return {
        ...state,
        [action.signedInUser]: {
          ...state[action.signedInUser],
          answers: {
            ...state[action.signedInUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
