import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authActions"

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = event => {
      event.preventDefault();
      this.setState({
          credentials: {
              this.state.credentials,
              [event.target.name]: event.target.value
          }
      });
  }

  login = event => {
    console.log("login event", event);
    event.preventDefault();
    this.props.login(this.state.credentials)
    .then(() => {
        this.props.history.push('/habit-list');
    });

    this.setState({
        username: "",
        password: ""
    });
  };

  render() {
    return (
        <form onSubmit={this.login}>
            <input 
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
            />
            <input 
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
            />
            <button>Create Account</button>
            <button>Log In</button>
        </form>

    );
  }
}

const mapStateToProps = state => ({
    error: state.user.error,
    fetching: state.user.fetching
  });


  export default connect(
    mapStateToProps,
    { login }
  )(Login);
