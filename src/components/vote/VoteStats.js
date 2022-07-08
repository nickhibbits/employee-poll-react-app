import "../../styles/vote.css";

const VoteStats = ({ question, selected, optionId }) => {
  function createStats(question, selected, optionId) {
    let votePercentage;
    let voteCount;

    const optionOneVoteCount = question.optionOne.votes.length;
    const optionTwoVoteCount = question.optionTwo.votes.length;

    const countTotal = optionOneVoteCount + optionTwoVoteCount;

    if (optionId === "optionOne" && selected === optionId) {
      voteCount = optionOneVoteCount;
      votePercentage = ((optionOneVoteCount / countTotal) * 100).toFixed(1);
    } else {
      voteCount = optionTwoVoteCount;
      votePercentage = ((optionTwoVoteCount / countTotal) * 100).toFixed(1);
    }

    return {
      votePercentage,
      voteCount,
    };
  }

  const { votePercentage, voteCount } = createStats(
    question,
    selected,
    optionId
  );
  return (
    <div className="vote-stats-component">
      <div className="vote-stat-info">{votePercentage}% of votes cast</div>
      <div className="vote-stat-info">{voteCount} votes total</div>
    </div>
  );
};

export default VoteStats;
