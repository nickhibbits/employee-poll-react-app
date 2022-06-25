import "../styles/vote.css";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";

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
  function handleSelect(e) {
    console.log(e.target.value);
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
        <div className="options-wrapper">
          <div className="option" onClick={(e) => handleSelect(e)}>
            {props.question.optionOne.text}
          </div>
          <div className="or-divider">or</div>
          <div className="option">{props.question.optionTwo.text}</div>
        </div>
      </section>
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
