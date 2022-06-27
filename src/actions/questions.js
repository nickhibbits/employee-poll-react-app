export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

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

export function addQuestion(formattedQuestion) {
  return {
    type: ADD_QUESTION,
    formattedQuestion,
  };
}
