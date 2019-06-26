import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./Login.css";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  componentDidMount() {
    this.setState({
      credentials: {
        username: localStorage.getItem("username"),
        password: ""
      }
    });
  }

  handleChanges = event => {
    event.preventDefault();
    localStorage.setItem("username", this.state.credentials.username);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  login = event => {
    console.log("login event", event);
    event.preventDefault();
    this.props.login(this.state.credentials).then(err => {
      !err && this.props.history.push("/dashboard");
    });
    // this.setState({
    //   credentials: { ...this.state.credentials, password: "" }
    // });
  };

  render() {
    return (
      <div className="Login">
        <h1 className="welcome">Welcome to LifeGPA!</h1>
        {/* <div className="create-account-header">CREATE ACCOUNT</div> */}
        <Button
          onClick={() => {
            this.props.history.push("/create");
          }}
          className="create-account-button"
          color="primary"
        >
          Create Account
        </Button>
        <div className="error">
          {this.props.error && `${this.props.error.data}`}
        </div>
        <Form onSubmit={this.login}>
          <FormGroup className="login-input-container">
            {/* <Label className="login-header">LOGIN</Label> */}
            <Input
              required
              type="text"
              name="username"
              placeholder="username"
              value={this.state.credentials.username}
              onChange={this.handleChanges}
              className="login-input"
            />
            <Input
              required
              type="password"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChanges}
              className="login-input"
            />
          </FormGroup>
          <Button className="login-button" color="primary">
            Log In
          </Button>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.string,
  fetching: PropTypes.bool
};

const mapStateToProps = state => ({
  error: state.user.error,
  fetching: state.user.fetching
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
