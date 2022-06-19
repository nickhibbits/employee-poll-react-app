import { useState } from "react";
import "../styles/App.css";
import Login from "./Login";

function App() {
  // const [user, setUser] = useState({});

  const users = ["sally", "jess", "bill"];

  // if (!user) {
  return <Login users={users} setUser />;
  // }

  return <div className="App">APP</div>;
}

export default App;
