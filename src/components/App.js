import { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import "../styles/app.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import Vote from "./Vote";
import Leaderboard from "./Leaderboard";
// import "../styles/Login.css";

function App() {
  // const users = ["sally", "jess", "bill"];

  if (!props.authedUser) {
    return (
      <div className="screen-center">
        <Login users={props.usernames} />
      </div>
    );
  }

  return (
    <div className="app-component">
      <div className="app-wrapper">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/questions/:question_id" element={<Vote />} />
          <Route path="/add" element={<NewQuestion />} />
          <Route path="/leaderboard" exact element={<Leaderboard />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth, users }) => ({
  authedUser: auth,
  usernames: Object.keys(users),
});

export default connect(mapStateToProps)(App);
