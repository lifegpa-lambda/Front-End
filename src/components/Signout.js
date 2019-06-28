import { connect } from "react-redux";
import { logout } from "../actions/authActions";

const Signout = props => {
  // console.log("signout");
  localStorage.removeItem("token");
  props.logout();
  window.location.href = "/";
  return null;
};

export default connect(
  null,
  { logout }
)(Signout);
