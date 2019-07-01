import React from "react";
import "./Homepage.styles.scss";

const HomePage = () => (
	<div className="homepage">
		<div className="directory-menu">
			<div className="menu-item">
				<div className="content">
					<h1 className="title">Hats</h1>
					<span className="subtitle"> SHOP NOW </span>
				</div>
			</div>

			<div className="menu-item">
				<div className="content">
					<h1 className="title">Jacket</h1>
					<span className="subtitle"> SHOP NOW </span>
				</div>
			</div>

			<div className="menu-item">
				<div className="content">
					<h1 className="title">Man</h1>
					<span className="subtitle"> SHOP NOW </span>
				</div>
			</div>

			<div className="menu-item">
				<div className="content">
					<h1 className="title">Woman</h1>
					<span className="subtitle"> SHOP NOW </span>
				</div>
			</div>

			<div className="menu-item">
				<div className="content">
					<h1 className="title">42</h1>
					<span className="subtitle"> SHOP NOW </span>
				</div>
			</div>
		</div>
	</div>
);

export default HomePage;
