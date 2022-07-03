import "../../styles/leaderboard.css";

const LeaderboardRow = ({ user }) => {
  const { name, questions, answers, avatarURL } = user;
  return (
    <tbody>
      <tr className="leaderboard-row-component">
        <td className="user-info-wrapper">
          <img
            src={avatarURL}
            alt="user-avatar"
            style={{ maxHeight: "50px" }}
          />
          <div className="user-name">{name}</div>
        </td>
        <td className="questions-asked">{questions.length}</td>
        <td className="questions-answered">{Object.values(answers).length}</td>
      </tr>
    </tbody>
  );
};

export default LeaderboardRow;
