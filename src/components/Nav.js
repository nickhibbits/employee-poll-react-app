import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/nav.css";

const Nav = (props) => {
  return (
    <div className="nav-component">
      <ul className="nav-options">
        <Link to={"/"} className="nav-option">
          Dashboard
        </Link>
        <Link to={"/add"} className="nav-option">
          New
        </Link>
        <Link to={"/leaderboard"} className="nav-option">
          Leaderboard
        </Link>
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
