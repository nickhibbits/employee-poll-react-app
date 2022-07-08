import "../../styles/vote.css";

const VoteStats = ({ question, selected, optionId }) => {
  function createStats(question, selected, optionId) {
    let optionOneVoteCount = question.optionOne.votes.length;
    let optionTwoVoteCount = question.optionTwo.votes.length;

    console.log("selected", selected);

    let votePercentage;
    let voteCount;
    const countTotal = optionOneVoteCount + optionTwoVoteCount + 1;

    if (optionId === "optionOne" && selected === optionId) {
      optionOneVoteCount += 1;
      voteCount = optionOneVoteCount;
      votePercentage = ((optionOneVoteCount / countTotal) * 100).toFixed(1);
    } else {
      optionTwoVoteCount += 1;
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
