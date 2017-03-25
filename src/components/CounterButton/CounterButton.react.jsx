import React from "react";
import {connect} from "react-redux";
import {incrementCounter} from "./CounterButton.actions.jsx";

const CounterButton = (props) => (
	<button type="button" onClick={() => {
		props.dispatch(incrementCounter(1))
	}}>{props.children}</button>
);

CounterButton.defaultProps = {
	children: "Click me"
};

export default connect()(CounterButton);

