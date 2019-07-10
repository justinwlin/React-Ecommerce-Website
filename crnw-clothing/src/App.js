import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/componentIndex";
import { HomePage, ShopPage, SignInAndSignUpPages } from "./pages/pagesIndex";
import { setCurrentUser } from "./redux/user/user.actions";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
	unsubcribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				console.log("User Auth:", userAuth);
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubcribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPages} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(
	null,
	mapDispatchToProps
)(App);
