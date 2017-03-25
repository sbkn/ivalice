import React from "react";
import DisplayCounter from "../DisplayCounter/DisplayCounter.react.jsx";
import SecondComponent from "../CounterButton/CounterButton.react.jsx";

const FirstView = (props) => (
	<div>
		<DisplayCounter/>
		<SecondComponent/>
	</div>
);

export default FirstView;

