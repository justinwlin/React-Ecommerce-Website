import React from "react";
import "./categoryPage.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import { CollectionItem } from "../../components/componentIndex";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	let showItems = items.map((item) => (
		<CollectionItem key={item.id} item={item} />
	));

	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">{showItems}</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
