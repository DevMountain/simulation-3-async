import React, { Component } from "react";
import"./Userbox.css";


export default class Userbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="User-Container">
        <img src="https://robohash.org/me" alt="User Profile Pic"/>
        <div>
            <h3>Billy<br/>Blanks</h3>
            <button>Edit Profile</button>
        </div>
      </div>
    );
  }
}

