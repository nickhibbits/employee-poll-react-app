import "../styles/leaderboard.css";

const LeaderboardRow = ({ user }) => {
  const { name, questions, answers } = user;
  return (
    <tr className="leaderboard-row-component">
      <td className="user-info-wrapper">
        <div className="user-name">{name}</div>
        <div className="user-avatar">(AVATAR)</div>
      </td>
      <td className="questions-asked">{questions.length}</td>
      <td className="questions-answered">{Object.values(answers).length}</td>
    </tr>
  );
};

export default LeaderboardRow;
