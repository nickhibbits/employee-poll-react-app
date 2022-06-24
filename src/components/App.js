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
import { handleInitialData } from "../actions/shared";
// import "../styles/Login.css";

function App(props) {
  // const users = ["sally", "jess", "bill"];

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, props.authedUser);

  if (!props.authedUser) {
    return (
      <div className="screen-center">
        <Login />
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

const mapStateToProps = ({ auth }) => ({
  authedUser: Object.values(auth) > 1 ? auth : false,
});

export default connect(mapStateToProps)(App);
