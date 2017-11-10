import React, { Component } from 'react';
import axios from 'axios';

import router from './router';
import './App.css';

class App extends Component {
	componentDidMount() {
		// axios.get(“/api/test”).then(response => {
		//   console.log(response);
		// });
	}
	render() {
		return <div className="App">{router}</div>;
	}
}

export default App;
