import "../../styles/vote.css";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { handleAnswerQuestion } from "../../actions/shared";

import VoteOption from "./VoteOption";
import VoteStats from "./VoteStats";

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

  const question = props.questions[props.id];
  const { optionOne, optionTwo, author } = question;
  const { dispatch, router, id, avatar } = props;

  useEffect(() => {
    if (submitted) {
      return router.navigate("/");
    }

    if (!question) {
      console.log("no matching questions");
      return router.navigate("/404");
    }

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
    dispatch(handleAnswerQuestion(id, selected));
    setSubmitted(true);
  }

  return (
    <div className="vote-component">
      <section className="user-wrapper">
        <h2>Question from {author}</h2>
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
            <VoteStats question={question} selected={"optionOne"} />
          ) : null}
          <div className="or-divider">or</div>
          <VoteOption
            text={optionTwo.text}
            handleSelect={handleSelect}
            option={"optionTwo"}
            selected={selected}
          />
          {showVoteStats ? (
            <VoteStats question={question} selected={"optionTwo"} />
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
