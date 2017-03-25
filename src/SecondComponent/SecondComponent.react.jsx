import React from "react";

const SecondComponent = (props) => (
	<div className="header">{props.children}</div>
);

SecondComponent.defaultProps = {
	children: "Bye World .."
};

export default SecondComponent;

