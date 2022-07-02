import { useState } from "react";
import { connect } from "react-redux";
import "../../styles/dashboard.css";
import QuestionsList from "./QuestionsList";

const Dashboard = (props) => {
  const [showAnsweredQuestions, setShowAnsweredQuestions] = useState(false);

  return (
    <div className="dashboard-component">
      <div className="filter-wrapper">
        <h3>Filter questions:</h3>
        <label className="filter-option" data-testid="answered-filter">
          Answered
          <input
            type="radio"
            checked={showAnsweredQuestions}
            onChange={() => setShowAnsweredQuestions(true)}
          />
        </label>
        <label className="filter-option" data-testid="unanswered-filter">
          Unanswered
          <input
            type="radio"
            checked={!showAnsweredQuestions}
            onChange={() => setShowAnsweredQuestions(false)}
          />
        </label>
      </div>
      {showAnsweredQuestions ? (
        <QuestionsList questions={props.answeredQuestions} title={"Answered"} />
      ) : (
        <QuestionsList
          questions={props.unansweredQuestions}
          title={"Unanswered"}
        />
      )}
    </div>
  );
};

const mapStateToProps = ({ auth, questions, users }) => {
  const signedInUser = users[auth.signedIn];

  const answeredQuestions = Object.values(questions).filter((question) =>
    Object.keys(signedInUser.answers).includes(question.id)
  );

  const unansweredQuestions = Object.values(questions).filter(
    (question) => !Object.keys(signedInUser.answers).includes(question.id)
  );

  return {
    answeredQuestions,
    unansweredQuestions,
  };
};
export default connect(mapStateToProps)(Dashboard);
