import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <h1 className="navBarText">{this.props.text}</h1>
      </div>
    );
  }
}

export default NavBar;
