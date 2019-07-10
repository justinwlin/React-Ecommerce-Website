import React from "react";
import "./cart-dropdown.styles.scss";
import { CustomButton, CartItem } from "../componentIndex";
import { connect } from "react-redux";

const CartDropDown = ({ cartItems }) => {
	let cartstuff = cartItems.map((cartItem) => {
		console.log(cartItem);
		return <CartItem key={CartItem.id} item={cartItem} />;
	});
	return (
		<div className="cart-dropdown">
			<div className="cart-items">{cartstuff}</div>
			<CustomButton> GO TO CHECKOUT </CustomButton>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems
});

export default connect(mapStateToProps)(CartDropDown);
