import { useState } from "react";
import "../styles/login.css";
import "../styles/index.css";
import { setAuth } from "../actions/auth";
import { connect } from "react-redux";

const Login = (props) => {
  const [user, setUser] = useState("Select");

  function handleChange(user) {
    setUser(user);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.dispatch(setAuth(user));
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
          {props.users.map((user, i) => (
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

const mapStateToProps = ({ users }) => ({
  users: Object.keys(users),
});

export default connect(mapStateToProps)(Login);
