import { useState } from "react";
import "../styles/Login.css";
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
    props.signedIn();
  }

  return (
    <div className="login-component">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <label className="form-title">Login</label>
        <div className="verify-user-wrapper">
          <div>As </div>
          <div className="display-user"> {user}</div>
        </div>
        <select defaultValue="" onChange={(e) => handleChange(e.target.value)}>
          <option value="" disabled>
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
