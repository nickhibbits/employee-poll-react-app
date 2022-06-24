import { _getUsers } from "../utils/_DATA";
import { setAuth } from "./auth";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    return _getUsers().then((res) => {
      console.log("res", res);
      dispatch(receiveUsers(res));
      dispatch(setAuth(""));
    });
  };
}
