import {
  ADD_USER_ANSWER,
  ADD_USER_QUESTION,
  RECEIVE_USERS,
} from "../actions/users";

export default function users(state = {}, action) {
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
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: [
            ...state[action.authedUser].questions,
            action.formattedQuestion.id,
          ],
        },
      };
    default:
      return state;
  }
}
