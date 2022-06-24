import { useEffect, useState } from "react";
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
  console.log("props", props);

  const [_authedUser, set_authedUser] = useState(false);

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  if (!props.authedUser) {
    return (
      <div className="screen-center">
        <Login signedIn={() => set_authedUser(!_authedUser)} />
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
  authedUser: auth.signedIn ? auth : false,
});

export default connect(mapStateToProps)(App);
