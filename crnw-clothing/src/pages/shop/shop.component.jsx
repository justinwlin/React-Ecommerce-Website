import React from "react";
import { Route } from "react-router-dom";
import { CollectionsOverview } from "../../components/componentIndex";
import { CollectionPage } from "../pagesIndex";
const ShopPage = ({ match, location, history }) => {
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
};

export default ShopPage;
