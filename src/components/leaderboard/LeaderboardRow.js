import Avatar from "react-avatar";
import "../../styles/leaderboard.css";

const LeaderboardRow = ({ user }) => {
  const { name, questions, answers } = user;
  return (
    <tbody>
      <tr className="leaderboard-row-component">
        <td className="user-info-wrapper">
          <Avatar name={name} size="50px" round={true} />
          <div className="user-name">{name}</div>
        </td>
        <td className="questions-asked">{questions.length}</td>
        <td className="questions-answered">{Object.values(answers).length}</td>
      </tr>
    </tbody>
  );
};

export default LeaderboardRow;
