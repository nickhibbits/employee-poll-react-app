import "../../styles/vote.css";

const VoteStats = ({ question, selected }) => {
  function createStats(question, selected) {
    let optionOneVoteCount = question.optionOne.votes.length;
    let optionTwoVoteCount = question.optionTwo.votes.length;

    console.log("selected", selected);

    selected === "optionOne"
      ? (optionOneVoteCount += 1)
      : (optionTwoVoteCount += 1);

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
