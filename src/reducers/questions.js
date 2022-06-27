import { ADD_QUESTION_ANSWER, RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  const { id, selectedOption, signedInUser } = action;

  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION_ANSWER:
      console.log("state", state);
      console.log("state[id][selectedOption]", state[id][selectedOption]);
      return {
        ...state,
        [id]: {
          ...state[id],
          [selectedOption]: {
            ...state[id][selectedOption],
            votes: state[id][selectedOption].votes.concat([signedInUser]),
          },
        },
      };
    default:
      return state;
  }
}
