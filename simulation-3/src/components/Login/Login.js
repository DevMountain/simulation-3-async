import React, { Component } from 'react';
import logo from './../../assets/logo.png';
import './Login.css';


export default class Login extends Component {
    render() {
        return (
            <div className='App'>  
                <div className="body_login">
                    <div className="middle_box">
                        <img className="logo" src={logo} alt=""/>
                        <h1 className="home_name">Helo</h1>
                        <a href={ process.env.REACT_APP_LOGIN }><button className="home_button">Login/Register</button></a>
                    </div>
                </div>
            </div> 
        )
    }
}