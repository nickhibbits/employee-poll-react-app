import "../styles/_questions.css";
import { formatDate } from "../utils/helpers";

const Question = (props) => {
  return (
    <div className="question-component">
      <div className="card-title">{props.author}</div>
      <div className="card-date">{formatDate(props.timestamp)}</div>
    </div>
  );
};

export default Question;
