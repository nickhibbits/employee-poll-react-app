import "../../styles/vote.css";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { handleAnswerQuestion } from "../../actions/shared";

import VoteOption from "./VoteOption";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const Vote = (props) => {
  const [selected, setSelected] = useState(props.userAnswer);
  const [showVoteStats, setShowVoteStats] = useState(false);
  console.log("props.question", props.question);
  const { optionOne } = props.question;

  useEffect(() => {
    if (selected) {
      setShowVoteStats(true);
    }
  }, [selected]);

  function handleSelect(e) {
    const selectedText = e.target.textContent;
    selectedText === `${optionOne.text}?`
      ? setSelected("optionOne")
      : setSelected("optionTwo");
  }

  function handleSubmit() {
    props.dispatch(handleAnswerQuestion(props.question.id, selected));
    setShowVoteStats(true);
  }

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

  if (props.question === 404) {
    return <div>404 not found</div>;
  }

  return (
    <div className="vote-component">
      <section className="user-wrapper">
        <h2>Question from {props.question.author}</h2>
        <img src={props.avatar} alt="user-avatar" />
      </section>
      <section className="vote-options-wrapper" round="10px">
        <h2>Would you rather</h2>
        <div className="options-container">
          <VoteOption
            text={props.question.optionOne.text}
            handleSelect={handleSelect}
            option={"optionOne"}
            selected={selected}
          />
          {showVoteStats ? (
            <div className="stats-wrapper">
              {/* <div className="vote-stat-title">This option received</div> */}
              <div className="vote-stat-info">
                {createStats(props.question, "optionOne").votePercentage}% of
                votes cast
              </div>
              <div className="vote-stat-info">
                {createStats(props.question, "optionOne").voteCount} votes total
              </div>
            </div>
          ) : null}
          <div className="or-divider">or</div>
          <VoteOption
            text={props.question.optionTwo.text}
            handleSelect={handleSelect}
            option={"optionTwo"}
            selected={selected}
          />
          {showVoteStats ? (
            <div className="stats-wrapper">
              {/* <div className="vote-stat-title">This option received</div> */}
              <div className="vote-stat-info">
                {createStats(props.question, "optionTwo").votePercentage}% of
                votes cast
              </div>
              <div className="vote-stat-info">
                {createStats(props.question, "optionTwo").voteCount} votes total
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const mapStateToProps = ({ questions, users, auth }, props) => {
  const { id } = props.router.params;

  return {
    id,
    question: questions[id] ? questions[id] : 404,
    userAnswer: users[auth.signedIn].answers[id],
    avatar: users[questions[id].author].avatarURL,
  };
};

export default withRouter(connect(mapStateToProps)(Vote));
