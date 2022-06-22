import { useState } from "react";
import "../styles/App.css";
import Login from "./Login";
import Nav from "./Nav";
import QuestionsList from "./QuestionsList";
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
      <div className="app-wrapper">
        <Nav />
        <QuestionsList title={"Unanswered"} />
        <QuestionsList title={"Answered"} />
      </div>
    </div>
  );
}

export default App;
