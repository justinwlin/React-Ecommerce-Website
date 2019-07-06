import React from "react";
import { SignIn, SignUp } from "../../components/componentIndex";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInAndSignUpPage;
