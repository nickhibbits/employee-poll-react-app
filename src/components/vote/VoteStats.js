import "../../styles/vote.css";

const VoteStats = ({ voteCount, votePercentage }) => {
  return (
    <div className="vote-stats-component">
      <div className="vote-stat-info">{votePercentage}% of votes cast</div>
      <div className="vote-stat-info">{voteCount} votes total</div>
    </div>
  );
};

export default VoteStats;
