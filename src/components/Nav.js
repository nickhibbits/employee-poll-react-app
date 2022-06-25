import { connect } from "react-redux";
import "../styles/nav.css";

const Nav = (props) => {
  return (
    <div className="nav-component">
      <ul className="nav-options">
        <li className="nav-option">Dashboard</li>
        <li className="nav-option">New</li>
        <li className="nav-option">Leaderboard</li>
      </ul>
      <div className="auth-container">
        <p>{props.signedIn}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  signedIn: auth.signedIn,
});

export default connect(mapStateToProps)(Nav);
