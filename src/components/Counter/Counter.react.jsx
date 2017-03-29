import React from "react";

const Counter = (props) => (
	<div>{props.count}</div>
);

Counter.propTypes = {
	count: React.PropTypes.number
};

export default Counter;
