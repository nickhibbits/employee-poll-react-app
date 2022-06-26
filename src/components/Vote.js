import "../styles/vote.css";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { MdCheck } from "react-icons/md";
import { useState } from "react";

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
  const [selected, setSelected] = useState(null);
  const { optionOne } = props.question;

  function handleSelect(e) {
    const selectedText = e.target.textContent;
    selectedText === `${optionOne.text}?` ? setSelected(1) : setSelected(2);
  }

  function handleSubmit() {
    console.log("submit");
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
          <div
            className="option-wrapper"
            style={
              selected === 1
                ? { background: "lightgreen", borderRadius: "10px" }
                : null
            }
          >
            <div className="checkmark-container">
              <div className="checkmark-wrapper">
                <MdCheck
                  size={20}
                  display={selected === 1 ? "block" : "none"}
                />
              </div>
            </div>
            <div className="option" onClick={(e) => handleSelect(e)}>
              {props.question.optionOne.text}?
            </div>
          </div>
          <div className="or-divider">or</div>
          <div
            className="option-wrapper"
            style={
              selected === 2
                ? { background: "lightgreen", borderRadius: "10px" }
                : null
            }
            onClick={(e) => handleSelect(e)}
          >
            <div className="checkmark-container">
              <div className="checkmark-wrapper">
                <MdCheck
                  size={20}
                  color="black"
                  display={selected === 2 ? "block" : "none"}
                />
              </div>
            </div>
            <div className="option">{props.question.optionTwo.text}?</div>
          </div>
        </div>
      </section>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const mapStateToProps = ({ questions }, props) => {
  const { id } = props.router.params;
  console.log("id", id);

  console.log("question", questions);

  return {
    id,
    question: questions[id] ? questions[id] : 404,
  };
};

export default withRouter(connect(mapStateToProps)(Vote));
