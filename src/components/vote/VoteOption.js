import { MdCheck } from "react-icons/md";
import { connect } from "react-redux";
import "../../styles/vote.css";

const VoteOption = ({ selected, option, handleSelect, text }) => {
  return (
    <div
      className="vote-option-component"
      style={
        selected === option
          ? {
              background: "lightgreen",
              borderRadius: "10px",
              transition: "ease 0.5s",
            }
          : null
      }
    >
      <div className="checkmark-container">
        <div className="checkmark-wrapper">
          <MdCheck size={20} display={selected === option ? "block" : "none"} />
        </div>
      </div>
      <div className="option" onClick={(e) => handleSelect(e)}>
        {text}?
      </div>
    </div>
  );
};

export default connect()(VoteOption);
