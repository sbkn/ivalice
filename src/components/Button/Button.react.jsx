import React from "react";
import PropTypes from "prop-types";

const Button = (props) => (
	<button type={props.type || "button"} onClick={props.onClick}>
		Click me
	</button>
);

Button.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.string
};

export default Button;
