import React from "react";
import DisplayCounter from "../ConnectedCounter/ConnectedCounter.react.jsx";
import SecondComponent from "../ConnectedButton/ConnectedButton.react.jsx";

const FirstView = () => (
	<div>
		<DisplayCounter/>
		<SecondComponent/>
	</div>
);

export default FirstView;

