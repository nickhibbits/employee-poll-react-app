import { connect } from "react-redux";
import "../styles/leaderboard.css";
import LeaderboardRow from "./LeaderboardRow";

const LeaderBoard = ({ users }) => {
  console.log("users", users);

  function getSum(a, b) {
    return a + b;
  }
  return (
    <div className="leaderboard-component">
      <h2>Leaderboard</h2>
      <div className="table-wrapper">
        <table className="leaderboard-table">
          <tr className="leaderboard-title-wrapper">
            <th className="user-title">User</th>
            <th className="questions-asked-title">Asked</th>
            <th className="questions-answered-title">Answered</th>
          </tr>
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
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});
export default connect(mapStateToProps)(LeaderBoard);
