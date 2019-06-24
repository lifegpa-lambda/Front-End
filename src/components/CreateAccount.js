import React, { Component } from "react";
import { connect } from "react-redux";
import { createAccount } from "../actions/authActions";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class CreateAccount extends Component {
  state = {
    credentials: {
      username: "",
      fullName: "",
      password: "",
      email: "",
      userImgUrl: ""
    }
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
    this.props.createAccount(this.state.credentials).then(() => {
      this.props.history.push("/habits");
    });
    this.setState({
      credentials: {
        username: "",
        fullName: "",
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
        <Form onSubmit={this.login}>
          <FormGroup>
            <Label className="login-header">CREATE ACCOUNT</Label>
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
              name="fullName"
              placeholder="Full name"
              value={this.state.credentials.fullName}
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
              required
              type="text"
              name="imgUrl"
              placeholder="Link a profile image"
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
