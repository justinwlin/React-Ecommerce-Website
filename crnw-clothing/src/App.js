import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/componentIndex";
import { HomePage, ShopPage, SignInAndSignUpPages } from "./pages/pagesIndex";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	unsubcribeFromAuth = null;

	componentDidMount() {
		this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				console.log("User Auth:", userAuth);
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
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
