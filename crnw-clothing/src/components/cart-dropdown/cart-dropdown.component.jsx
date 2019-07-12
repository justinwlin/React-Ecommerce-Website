import React from "react";
import "./cart-dropdown.styles.scss";
import { CustomButton, CartItem } from "../componentIndex";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropDown = ({ cartItems, history, dispatch }) => {
	let cartstuff = cartItems.length ? (
		cartItems.map((cartItem) => {
			return <CartItem key={CartItem.id} item={cartItem} />;
		})
	) : (
		<span className="empty-message">Your Cart is Empty</span>
	);
	return (
		<div className="cart-dropdown">
			<div className="cart-items">{cartstuff}</div>
			<CustomButton
				onClick={() => {
					history.push("/checkout");
					dispatch(toggleCartHidden());
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
