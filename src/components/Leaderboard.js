import { connect } from "react-redux";
import "../styles/leaderboard.css";
import LeaderboardRow from "./LeaderboardRow";

const LeaderBoard = ({ users }) => {
  // TODO create function that returns new ordered array of users

  // Consider using table

  console.log("users", users);

  function getSum(a, b) {
    return a + b;
  }
  return (
    <div className="leaderboard-component">
      <h2>Leaderboard</h2>
      <div className="leaderboard-wrapper">
        {Object.values(users)
          .sort((a, b) => {
            return (
              getSum(b.questions.length, Object.keys(b.answers).length) -
              getSum(a.questions.length, Object.keys(a.answers).length)
            );
          })
          .map((user) => {
            return <LeaderboardRow key={user.id} user={user} />;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});
export default connect(mapStateToProps)(LeaderBoard);
