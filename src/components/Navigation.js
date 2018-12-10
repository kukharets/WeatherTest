import React from "react";

export default class Navigation extends React.Component {
  render() {
      console.log("navigation", this)
    return (
      <nav className="navbar bg-white">
        <a className="navbar-brand text-dark" href="/">
          Weather test
        </a>
      </nav>
    );
  }
}
