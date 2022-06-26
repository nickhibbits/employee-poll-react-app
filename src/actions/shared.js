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

export function handleAnswerQuestion(qid, answer) {
  console.log("_answer", answer);

  return async (dispatch, getState) => {
    const { auth } = getState();
    const authedUser = auth.signedIn;

    await _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then(() => {
      // console.log("qid", qid);
      // console.log("answer", answer);
      dispatch(addQuestionAnswer(qid, answer, auth.signedIn));
    });
  };
}
