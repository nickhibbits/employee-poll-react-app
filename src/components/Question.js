import { Link } from "react-router-dom";
import "../styles/_questions.css";
import { formatDate } from "../utils/helpers";

const Question = (props) => {
  const { id } = props;
  const question_id = id;
  return (
    <Link className="question-component" to={`/questions/${id}`}>
      <div className="card-title">{props.author}</div>
      <div className="card-date">{formatDate(props.timestamp)}</div>
    </Link>
  );
};

export default Question;
