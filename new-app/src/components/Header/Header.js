import React, { Component } from "react";

import home from "../../assets/home.png";
import search from "../../assets/search.png";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <header>
        <div className ="Wrapper">
          <div className="Branding">
            <h1>Helo</h1>
            <img src={home} alt="Home Icon" />
            <img src={search} alt="Search Icon" />
          </div>
          <div>
            <h2>Dashboard</h2>
            {/* <h2>{props.match.params.name}</h2> */}
          </div>
          <div>
            <h2>Logout</h2>
          </div>
        </div>
      </header>;
  }
}
