import { useState } from "react";
import "../styles/app.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import Vote from "./Vote";
import QuestionsList from "./QuestionsList";
// import "../styles/Login.css";

function App() {
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
        {/* <Dashboard /> */}
        <Vote />
        {/* <NewQuestion /> */}
      </div>
    </div>
  );
}

export default App;
