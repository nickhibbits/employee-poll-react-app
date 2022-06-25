import { Link } from "react-router-dom";
import "../styles/_questions.css";
import { formatDate } from "../utils/helpers";

const Question = (props) => {
  return (
    <Link className="question-component" to={`/questions/${props.id}`}>
      <div className="card-title">{props.author}</div>
      <div className="card-date">{formatDate(props.timestamp)}</div>
    </Link>
  );
};

export default Question;
