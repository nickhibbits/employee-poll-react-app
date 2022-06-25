import { _getQuestions, _getUsers } from "../utils/_DATA";
import { setAuth } from "./auth";
import { receiveQuestions } from "./questions";
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
