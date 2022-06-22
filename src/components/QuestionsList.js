import "../styles/_questions.css";
import Question from "./Question";

const questionIds = ["1", "2", "3", "4"];

const QuestionsList = ({ title }) => {
  return (
    <div className="questions-list-component">
      <h1>{title}</h1>
      <div className="questions-list-wrapper">
        {questionIds.map((questionId) => {
          return <Question questionId={questionId} />;
        })}
      </div>
    </div>
  );
};

export default QuestionsList;
