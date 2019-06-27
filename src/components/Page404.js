import React from "react";

class Page404 extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.history.push("/login"), 10000);
  }

  render() {
    return (
      <>
        <h1 className="four-oh-four">
          {" "}
          404 Page not found, redirecting you in 10 seconds
        </h1>
        <button>Home</button>
      </>
    );
  }
}

export default Page404;
