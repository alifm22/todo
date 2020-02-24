import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
export class Header extends Component {
  render() {
    return (
      <header className="text-center" style={titleStyle}>
        <h1 className="pt-2 pb-2 m-0">Todo List</h1>
        <Link style={linkStyle} to="/">
          Home
        </Link>{" "}
        <span style={{ color: "white" }}>|</span>{" "}
        <Link style={linkStyle} to="/about">
          About
        </Link>
      </header>
    );
  }
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

const titleStyle = {
  borderRadius: "0 0 30% 30%",
  background: "#05414e",
  boxShadow: "0px 4px 7px 0px #333"
};

export default Header;
