import { useState } from "react";
import "../styles/App.css";
import Login from "./Login";
import Nav from "./Nav";
// import "../styles/Login.css";

function App() {
  // const [user, setUser] = useState({});

  const users = ["sally", "jess", "bill"];

  // if (!user) {
  // return (
  //   <div className="screen-center">
  //     <Login users={users} setUser />
  //   </div>
  // );
  // }

  return (
    <div className="app-component">
      <Nav />
    </div>
  );
}

export default App;
