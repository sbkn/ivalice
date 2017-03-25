import React from "react";

const TestComponent = (props) => (
	<div className="header">{props.children}</div>
);

TestComponent.defaultProps = {
	children: "Hello World!"
};

export default TestComponent;

