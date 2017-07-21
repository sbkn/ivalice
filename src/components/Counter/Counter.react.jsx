import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => (
	<div>{props.count}</div>
);

Counter.propTypes = {
	count: PropTypes.number
};

export default Counter;
