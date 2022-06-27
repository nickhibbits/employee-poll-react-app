import "../styles/leaderboard.css";

const LeaderboardRow = ({ user }) => {
  const { name, questions, answers } = user;
  return (
    <div className="leaderboard-row-component">
      <div className="info-wrapper">
        <div className="user-name">{name}</div>
        <div className="user-avatar">(AVATAR)</div>
      </div>
      <div className="info-wrapper">
        <div className="questions-asked">{questions.length}</div>
        <div className="questions-answered">
          {Object.values(answers).length}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardRow;
