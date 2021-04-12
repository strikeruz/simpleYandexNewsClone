import React from 'react';
import NotFound from './../Pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const RenderRoutes = ({ routes }) => {
	return (
		<Router>
			<Switch>
				{routes.map(({ path, component, exact }, key) => (
					<Route path={path} component={component} key={key} exact={exact} />
				))}
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
};

export default RenderRoutes;
