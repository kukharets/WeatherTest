import React from "react";
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
class Navigation extends React.Component {
  render() {
      let params = queryString.parse(this.props.location.search)
      console.log("navigation", this.props)
    return (
      <nav className="navbar bg-white">
        <a className="navbar-brand text-dark" href="/">
          Weather test
        </a>
      </nav>
    );
  }
}

export default withRouter(Navigation)