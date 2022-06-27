import { _getUsers } from "../utils/_DATA";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUserAnswer(qid, answer, signedInUser) {
  return {
    type: ADD_USER_ANSWER,
    qid,
    answer,
    signedInUser,
  };
}

export function addUserQuestion(formattedQuestion, authedUser) {
  return {
    type: ADD_USER_QUESTION,
    formattedQuestion,
    authedUser,
  };
}
