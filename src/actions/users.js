import { _getUsers } from "../utils/_DATA";

export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  console.log("users", users);
  return {
    type: RECEIVE_USERS,
    users,
  };
}
