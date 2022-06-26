import { _getUsers } from "../utils/_DATA";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

export function receiveUsers(users) {
  console.log("users", users);
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
