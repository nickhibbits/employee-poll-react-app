import { _getQuestions, _getUsers, _saveQuestionAnswer } from "../utils/_DATA";
import { setAuth } from "./auth";
import { addQuestionAnswer, receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    _getUsers().then((res) => {
      console.log("res", res);
      dispatch(receiveUsers(res));
    });

    _getQuestions().then((res) => {
      console.log("res", res);
      dispatch(receiveQuestions(res));
    });
  };
}

export function handleAnswerQuestion(qid, _answer) {
  // console.log("qid", qid);s
  return async (dispatch, getState) => {
    const { auth } = getState();

    await _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then(() => {
      console.log("qid", qid);
      console.log("answer", answer);
      dispatch(addQuestionAnswer(qid, _answer, auth.signedIn));
    });
  };
}
