import "../styles/_questions.css";
import Question from "./Question";

const QuestionsList = (props) => {
  return (
    <div className="questions-list-component">
      <h1>{props.title}</h1>
      <div className="questions-list-wrapper">
        {Object.values(props.questions).map((question) => {
          return (
            <Question
              key={question.questionId}
              author={question.author}
              timestamp={question.timestamp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsList;
