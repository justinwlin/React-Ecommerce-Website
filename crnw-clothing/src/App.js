import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/componentIndex";
import { HomePage, ShopPage, SignInAndSignUpPages } from "./pages/pagesIndex";
import { auth } from "./firebase/firebase.utils";
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	unsubcribeFromAuth = null;

	componentDidMount() {
		this.unsubcribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubcribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPages} />
				</Switch>
			</div>
		);
	}
}

export default App;
