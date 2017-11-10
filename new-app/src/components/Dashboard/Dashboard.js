import React, { Component } from "react";

import Header from "../Header/Header";
import Userbox from "../Userbox/Userbox";
import "../../assets/reset.css";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
        <div className="Dashboard">
            <Header />
            <section className="User-Onboard">
                <Userbox />
                <div className="Onboard-Msg">
                    <p>
                    Welcome to Helo! Find recommended friends based on your
                    similarities, and even search for them by name. The more you
                    update your profile, the better recommendations we can make!
                    </p>
                </div>
            </section>
            <section className="Recommended-Friends">
                <div className="Recommended-Header">
                    <h2>Recommended Friends</h2>
                    <div>
                        <h3>Sorted by</h3>
                        <select>
                            <option selected value="firstname">First Name</option>
                            <option value="lastname">Last Name</option>
                            <option value="gender">Gender</option>
                            <option value="hobby">Hobby</option>
                            <option value="haircolor">Hair Color</option>
                            <option value="eyecolor">Eye Color</option>
                            <option value="birthday">Birthday</option>
                        </select>
                    </div>
                </div>
                <div className="Recommended-Body"></div>
            </section>
      </div>
      )
  }
}

export default Dashboard;
