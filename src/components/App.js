import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "../styles/App.css";
import Dashboard from "./dashboard/Dashboard";
import Login from "./Login";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import Vote from "./vote/Vote";
import Leaderboard from "./leaderboard/Leaderboard";
import NotFound from "./NotFound";

function App(props) {
  const [_authedUser, set_authedUser] = useState(false);
  const { dispatch } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  });

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
          <Route path="/questions/:id" element={<Vote />} />
          <Route path="/add" element={<NewQuestion />} />
          <Route path="/leaderboard" exact element={<Leaderboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({
  authedUser: auth.signedIn ? auth : false,
});

export default connect(mapStateToProps)(App);
