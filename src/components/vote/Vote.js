import "../../styles/vote.css";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { handleAnswerQuestion } from "../../actions/shared";

import VoteOption from "./VoteOption";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let params = useParams();
    let navigate = useNavigate();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const Vote = (props) => {
  const [selected, setSelected] = useState(props.userAnswer);
  const [showVoteStats, setShowVoteStats] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const optionOne = useRef({});
  const optionTwo = useRef({});
  const author = useRef("");

  useEffect(() => {
    console.log("props", props);

    if (submitted) {
      return props.router.navigate("/");
    }

    if (!props.questions[props.id]) {
      console.log("no matching questions");
      return props.router.navigate("/404");
    }
    optionOne.current = props.questions[props.id].optionOne;
    optionTwo.current = props.questions[props.id].optionTwo;
    author.current = props.questions[props.id].author;

    if (selected) {
      setShowVoteStats(true);
    }
  }, [selected, props, submitted]);

  function handleSelect(e) {
    const selectedText = e.target.textContent;
    selectedText === `${optionOne.text}?`
      ? setSelected("optionOne")
      : setSelected("optionTwo");
  }

  function handleSubmit() {
    props.dispatch(handleAnswerQuestion(props.question.id, selected));
    setSubmitted(true);
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
        <h2>Question from {author.current}</h2>
        <img src={props.avatar} alt="user-avatar" />
      </section>
      <section className="vote-options-wrapper" round="10px">
        <h2>Would you rather</h2>
        <div className="options-container">
          <VoteOption
            text={optionOne.text}
            handleSelect={handleSelect}
            option={"optionOne"}
            selected={selected}
          />
          {showVoteStats ? (
            <div className="stats-wrapper">
              {/* <div className="vote-stat-title">This option received</div> */}
              <div className="vote-stat-info">
                {
                  createStats(props.questions[props.id], "optionOne")
                    .votePercentage
                }
                % of votes cast
              </div>
              <div className="vote-stat-info">
                {createStats(props.questions[props.id], "optionOne").voteCount}{" "}
                votes total
              </div>
            </div>
          ) : null}
          <div className="or-divider">or</div>
          <VoteOption
            text={optionTwo.text}
            handleSelect={handleSelect}
            option={"optionTwo"}
            selected={selected}
          />
          {showVoteStats ? (
            <div className="stats-wrapper">
              {/* <div className="vote-stat-title">This option received</div> */}
              <div className="vote-stat-info">
                {
                  createStats(props.questions[props.id], "optionTwo")
                    .votePercentage
                }
                % of votes cast
              </div>
              <div className="vote-stat-info">
                {createStats(props.questions[props.id], "optionTwo").voteCount}{" "}
                votes total
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
    questions,
    userAnswer: users[auth.signedIn].answers[id],
    avatar: questions[id] ? users[questions[id].author].avatarURL : null,
  };
};

export default withRouter(connect(mapStateToProps)(Vote));
