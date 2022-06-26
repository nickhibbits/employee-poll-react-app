import "../styles/vote.css";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { MdCheck } from "react-icons/md";
import { useState } from "react";
import { handleAnswerQuestion } from "../actions/shared";
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
  const { optionOne } = props.question;

  function handleSelect(e) {
    const selectedText = e.target.textContent;
    console.log("selectedText", selectedText);
    selectedText === `${optionOne.text}?`
      ? setSelected("optionOne")
      : setSelected("optionTwo");
  }

  function handleSubmit() {
    console.log("props.question[selected]", props.question[selected]);

    props.dispatch(handleAnswerQuestion(props.question.id, selected));
  }

  if (props.question === 404) {
    return <div>404 not found</div>;
  }

  return (
    <div className="vote-component">
      <section className="user-wrapper">
        <h2>Question from {props.question.author}</h2>
        <div>avatar placeholder</div>
      </section>
      <section className="vote-options-wrapper">
        <h2>Would you rather</h2>
        <div className="options-container">
          <VoteOption
            text={props.question.optionOne.text}
            handleSelect={handleSelect}
            option={"optionOne"}
            selected={selected}
          />
          <div className="or-divider">or</div>
          <VoteOption
            text={props.question.optionTwo.text}
            handleSelect={handleSelect}
            option={"optionTwo"}
            selected={selected}
          />
        </div>
      </section>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const mapStateToProps = ({ questions, users, auth }, props) => {
  const { id } = props.router.params;
  console.log("id", id);

  console.log("question", questions);

  return {
    id,
    question: questions[id] ? questions[id] : 404,
    userAnswer: users[auth.signedIn].answers[id],
  };
};

export default withRouter(connect(mapStateToProps)(Vote));
