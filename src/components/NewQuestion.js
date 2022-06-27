import { useRef } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";
import "../styles/newQuestion.css";

const NewQuestion = (props) => {
  const optionOneRef = useRef(null);
  const optionTwoRef = useRef(null);
  const { author } = props;

  function handleSubmit() {
    const optionOneText = optionOneRef.current.value;
    const optionTwoText = optionTwoRef.current.value;
    console.log("optionOneText", optionOneText);
    console.log("optionTwoText", optionTwoText);

    const question = {
      optionOneText,
      optionTwoText,
      author,
    };
    props.dispatch(handleAddQuestion(question));
  }

  return (
    <div className="new-question-component">
      <h2>Create Question</h2>
      <div className="create-question-subheader">Would you rather...</div>
      <form className="create-option-container">
        <div className="create-option-wrapper">
          <label htmlFor="option-one">Option 1</label>
          <textarea
            id="option-one"
            className="create-option"
            placeholder="Enter text"
            ref={optionOneRef}
          />
        </div>
        or
        <div className="create-option-wrapper">
          <label htmlFor="option-two">Option 2</label>
          <textarea
            id="option-two"
            className="create-option"
            placeholder="Enter text"
            ref={optionTwoRef}
          />
        </div>
      </form>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return {
    author: auth.signedIn,
  };
}
export default connect(mapStateToProps)(NewQuestion);
