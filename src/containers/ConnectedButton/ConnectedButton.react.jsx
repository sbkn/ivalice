import React, {Component} from "react";
import PropTypes from "prop-types";
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

ConnectedButton.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(ConnectedButton);

