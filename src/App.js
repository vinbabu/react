import React from "react";
import BenefitSelection from "./components/benefits/BenefitSelection";
import { Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import BenefitReview from "./components/benefits/BenefitReview";
import "./styles.css";

export default function App() {
	return (
		<Provider store={store}>
			<Switch>
				<Route exact path="/" render={() => <Redirect to="/home" />} />
				<Route path="/home" component={BenefitSelection} />
				<Route path="/review" component={BenefitReview} />
			</Switch>
		</Provider>
	);
}
