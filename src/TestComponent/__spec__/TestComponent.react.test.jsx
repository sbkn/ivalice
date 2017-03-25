import React from "react";
import renderer from "react-test-renderer";
import TestComponent from "../TestComponent.react.jsx";

it("should render correctly", () => {

	const tree = renderer.create(
		<TestComponent myProp="awesome">Hello World!</TestComponent>
	).toJSON();

	expect(tree).toMatchSnapshot();
});