import { useState } from "react";

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
    <div className="login-wrapper">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <label>Login</label>
        <div>As {user}</div>
        <select onChange={(e) => handleChange(e.target.value)}>
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
