import "../styles/vote.css";

const Vote = (props) => {
  function handleSelect(e) {
    console.log(e.target.value);
  }
  return (
    <div className="vote-component">
      <section className="user-wrapper">
        <h2>Question from {props.user}</h2>
        <div>avatar placeholder</div>
      </section>
      <section className="vote-options-wrapper">
        <h2>Would you rather</h2>
        <div className="options-wrapper">
          <div className="option" onClick={(e) => handleSelect(e)}>
            Do this
          </div>
          <div className="or-divider">or</div>
          <div className="option">Do that</div>
        </div>
      </section>
    </div>
  );
};

export default Vote;
