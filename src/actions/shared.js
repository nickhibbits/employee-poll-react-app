import { _getQuestions, _getUsers, _saveQuestionAnswer } from "../utils/_DATA";
import { setAuth } from "./auth";
import { addQuestionAnswer, receiveQuestions } from "./questions";
import { addUserAnswer, receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    _getUsers().then((res) => {
      dispatch(receiveUsers(res));
    });

    _getQuestions().then((res) => {
      dispatch(receiveQuestions(res));
    });
  };
}

export function handleAnswerQuestion(qid, answer) {
  return async (dispatch, getState) => {
    const { auth } = getState();
    const authedUser = auth.signedIn;

    await _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then(() => {
      dispatch(addQuestionAnswer(qid, answer, auth.signedIn));
      dispatch(addUserAnswer(qid, answer, auth.signedIn));
    });
  };
}
