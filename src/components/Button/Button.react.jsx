import React from "react";

const Button = (props) => (
	<button type="button" onClick={props.onClick}>
		Click me
	</button>
);

Button.propTypes = {
	onClick: React.PropTypes.func
};

export default Button;
