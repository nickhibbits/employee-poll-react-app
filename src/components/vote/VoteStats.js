import "../../styles/vote.css";

const VoteStats = ({ question, selected }) => {
  function createStats(question, selected) {
    const optionOneVoteCount = question.optionOne.votes.length;
    const optionTwoVoteCount = question.optionTwo.votes.length;
    const countTotal = optionOneVoteCount + optionTwoVoteCount;

    const votePercentage =
      selected === "optionOne"
        ? ((optionOneVoteCount / countTotal) * 100).toFixed(1)
        : ((optionTwoVoteCount / countTotal) * 100).toFixed(1);

    return {
      votePercentage,
      voteCount:
        selected === "optionOne" ? optionOneVoteCount : optionTwoVoteCount,
    };
  }

  return (
    <div className="vote-stats-component">
      <div className="vote-stat-info">
        {createStats(question, selected).votePercentage}% of votes cast
      </div>
      <div className="vote-stat-info">
        {createStats(question, selected).voteCount} votes total
      </div>
    </div>
  );
};

export default VoteStats;
