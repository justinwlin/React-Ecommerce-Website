import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAKYEXbo1Z6BcfRbia5RsqFoeFIJhWS8bc",
	authDomain: "crwn-db-5f1e0.firebaseapp.com",
	databaseURL: "https://crwn-db-5f1e0.firebaseio.com",
	projectId: "crwn-db-5f1e0",
	storageBucket: "",
	messagingSenderId: "489369471720",
	appId: "1:489369471720:web:391e74c3c27a284d"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return; //If it returns null, then just return
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log("Error Creating User", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
