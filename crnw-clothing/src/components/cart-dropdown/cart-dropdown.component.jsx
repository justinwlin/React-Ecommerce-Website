import React from "react";
import "./cart-dropdown.styles.scss";
import { CustomButton } from "../componentIndex";

const CartDropDown = () => (
	<div className="cart-dropdown">
		<div className="cart-items">
			<CustomButton> GO TO CHECKOUT </CustomButton>
		</div>
	</div>
);

export default CartDropDown;
