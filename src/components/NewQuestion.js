import "../styles/newQuestion.css";

const NewQuestion = () => {
  return (
    <div className="new-question-component">
      <h2>Create Question</h2>
      <div className="create-question-subheader">Would you rather...</div>
      <section className="create-option-container">
        <div className="create-option-wrapper">
          <label htmlFor="option-one">Option 1</label>
          <textarea id="option-one" placeholder="Enter text" />
        </div>
        <div className="create-option-wrapper">
          <label htmlFor="option-two">Option 2</label>
          <textarea id="option-two" placeholder="Enter text" />
        </div>
      </section>
    </div>
  );
};

export default NewQuestion;
