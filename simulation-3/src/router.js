import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage.js';
import store from './store';
import { Provider } from 'react-redux';
export default (
	<Provider store={store}>
		<Switch>
			<Route exact path="/" component={LandingPage} />
		</Switch>
	</Provider>
);
