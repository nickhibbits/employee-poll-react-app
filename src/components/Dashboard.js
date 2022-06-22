import { useState } from "react";
import "../styles/dashboard.css";
import QuestionsList from "./QuestionsList";

const Dashboard = () => {
  const [showAnsweredQuestions, setShowAnsweredQuestions] = useState(false);

  return (
    <div className="dashboard-component">
      <div className="filter-wrapper">
        <h3>Filter questions:</h3>
        <label className="filter-option">
          Answered
          <input
            type="radio"
            checked={showAnsweredQuestions}
            onClick={() => setShowAnsweredQuestions(true)}
          />
        </label>
        <label className="filter-option">
          Unanswered
          <input
            type="radio"
            checked={!showAnsweredQuestions}
            onClick={() => setShowAnsweredQuestions(false)}
          />
        </label>
      </div>
      {showAnsweredQuestions ? (
        <QuestionsList title={"Answered"} />
      ) : (
        <QuestionsList title={"Unanswered"} />
      )}
    </div>
  );
};

export default Dashboard;
