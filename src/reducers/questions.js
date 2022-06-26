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
      return {
        ...state,
        [action.id]: {
          ...questions[action.id],
          [action.selectedOption.option]: {
            ...questions[action.id][action.selectedOption.option],
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
