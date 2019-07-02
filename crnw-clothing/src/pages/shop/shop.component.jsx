import React from "react";
import Collection from "./SHOP_DATA";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { Collection };
	}

	render() {
		const { Collection } = this.state;
		let collection = Collection.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		));
		return <div className="shop-page">{collection}</div>;
	}
}

export default ShopPage;
