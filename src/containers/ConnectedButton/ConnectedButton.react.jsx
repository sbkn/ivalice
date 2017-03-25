import React, {Component} from "react";
import {connect} from "react-redux";
import {incrementCounter} from "./ConnectedButton.actions.jsx";
import Button from "../../components/Button/Button.react.jsx";

export class ConnectedButton extends Component {
	render() {
		return (
			<Button onClick={() => {
				this.props.dispatch(incrementCounter(1))
			}}/>
		)
	}
}

export default connect()(ConnectedButton);

