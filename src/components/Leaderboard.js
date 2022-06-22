import "../styles/leaderboard.css";

const LeaderBoard = ({ users }) => {
  // TODO create function that returns new ordered array of users

  // Consider using table
  return (
    <div className="leaderboard-component">
      <h2>Leaderboard</h2>
      <section className="user-row">
        <div className="info-wrapper">
          <div className="user-name">Sam</div>
          <div className="user-avatar">(AVATAR)</div>
        </div>
        <div className="info-wrapper">
          <div className="questions-asked">10</div>
          <div className="questions-answered">23</div>
        </div>
      </section>
    </div>
  );
};

export default LeaderBoard;
