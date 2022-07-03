import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";

import { addQuestion, addQuestionAnswer, receiveQuestions } from "./questions";
import { addUserAnswer, addUserQuestion, receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    _getUsers().then((res) => {
      console.log("user res", res);

      const usersArray = Object.values(res).map((user) => {
        return Object.assign(user, {
          avatarURL: `https://i.pravatar.cc/150?u=${user.id}`,
        });
      });

      let users;

      usersArray.forEach((user, i) => {
        users = { ...users, [usersArray[i].id]: user };
      });

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

export function handleAddQuestion(question) {
  return async (dispatch, getState) => {
    const { auth } = getState();
    const authedUser = auth.signedIn;

    await _saveQuestion(question).then((formattedQuestion) => {
      console.log("formattedQuestion", formattedQuestion);
      dispatch(addUserQuestion(formattedQuestion, authedUser));
      dispatch(addQuestion(formattedQuestion));
    });
  };
}
