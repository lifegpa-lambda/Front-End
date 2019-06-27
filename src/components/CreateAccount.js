import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createAccount } from "../actions/authActions";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Login.css";

class CreateAccount extends Component {
  state = {
    credentials: {
      username: "",
      fullname: "",
      password: "",
      email: "",
      userImgUrl: ""
    }
  };

  componentDidMount = () => {
    console.log(this.props);
  };

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  createAccount = event => {
    console.log("create account event", event);
    event.preventDefault();
    this.props.createAccount(this.state.credentials).then(err => {
      !err && this.props.history.push("/habits");
    });
    this.setState({
      credentials: {
        username: "",
        fullname: "",
        password: "",
        email: "",
        userImgUrl: ""
      }
    });
  };

  render() {
    return (
      <div className="Login">
        <h1>Make the Grade</h1>
        <Form onSubmit={this.createAccount}>
          <FormGroup>
            <Label className="login-header">CREATE ACCOUNT</Label>
            <div className="error">
              {this.props.error && `${this.props.error.data.message}`}
            </div>
            <Input
              required
              type="text"
              name="username"
              placeholder="username"
              value={this.state.credentials.username}
              onChange={this.handleChanges}
            />
            <Input
              required
              type="text"
              name="fullname"
              placeholder="full name"
              value={this.state.credentials.fullname}
              onChange={this.handleChanges}
            />
            <Input
              required
              type="password"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChanges}
            />
            <Input
              required
              type="email"
              name="email"
              placeholder="email"
              value={this.state.credentials.email}
              onChange={this.handleChanges}
            />
            <Input
              type="text"
              name="imgUrl"
              placeholder="link a profile image"
              value={this.state.credentials.imgUrl}
              onChange={this.handleChanges}
            />
          </FormGroup>
          <Button className="create-account-button" color="primary">
            Create Account
          </Button>
        </Form>
      </div>
    );
  }
}

CreateAccount.propTypes = {
  error: PropTypes.string,
  fetching: PropTypes.bool,
  createAccount: PropTypes.func
};

const mapStateToProps = state => ({
  error: state.user.error,
  fetching: state.user.fetching
});

export default connect(
  mapStateToProps,
  { createAccount }
)(CreateAccount);
