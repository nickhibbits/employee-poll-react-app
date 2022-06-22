import { useState } from "react";
import "../styles/app.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import Vote from "./Vote";
import QuestionsList from "./QuestionsList";
import { Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/questions/:question_id" element={<Vote />} />
          <Route path="/add" element={<NewQuestion />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
