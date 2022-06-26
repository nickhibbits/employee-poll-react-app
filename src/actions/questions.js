export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestionAnswer(id, selectedOption, signedInUser) {
  return {
    type: ADD_QUESTION_ANSWER,
    id,
    selectedOption,
    signedInUser,
  };
}
