import React from "react";

class Page404 extends React.Component {
  state = {
    countdown: 10
  };
  componentDidMount() {
    setTimeout(() => this.props.history.push("/login"), 10000);
    setInterval(
      () => this.setState({ countdown: this.state.countdown - 1 }),
      1000
    );
  }

  render() {
    return (
      <>
        <h1 className="four-oh-four">
          {" "}
          404 Page not found, redirecting you in {this.state.countdown}{" "}
          {this.state.countdown > 1 ? "seconds" : "second"}...
        </h1>
        <button>Home</button>
      </>
    );
  }
}

export default Page404;
