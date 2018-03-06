import React, { Component } from "react";
import { render } from "react-dom";
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <header className="container-fluid">
        <h1>Grace Murray Hopper</h1>
        <hr></hr>
      </header>
    );
  }
}

export default Header;