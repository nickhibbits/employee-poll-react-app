import { useState } from "react";
import "../styles/login.css";
import "../styles/index.css";

const Login = ({ users, setUser }) => {
  const [user, _setUser] = useState("Select");

  console.log("users", users);

  function handleChange(user) {
    _setUser(user);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(user);
  }
  return (
    <div className="login-component">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <label className="form-title">Login</label>
        <div className="verify-user-wrapper">
          <div>As </div>
          <div className="display-user"> {user}</div>
        </div>
        <select onChange={(e) => handleChange(e.target.value)}>
          <option value="none" disabled selected>
            Select
          </option>
          {users.map((user, i) => (
            <option key={i} value={user}>
              {user}
            </option>
          ))}
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
