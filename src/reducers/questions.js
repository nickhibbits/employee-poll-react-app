import { ADD_QUESTION_ANSWER, RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  console.log("action", action);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION_ANSWER:
      console.log("state[action.id]", state[action.id]);
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.selectedOption]: {
            ...[action.selectedOption.option],
            votes: [
              ...questions[action.id][action.selectedOption.optionName].votes,
              action.signedInUser,
            ],
          },
        },
      };
    default:
      return state;
  }
}
