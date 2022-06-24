export const SET_AUTH = "SET_AUTH";

export function setAuth(auth) {
  console.log("auth", auth);
  return {
    type: SET_AUTH,
    auth,
  };
}
