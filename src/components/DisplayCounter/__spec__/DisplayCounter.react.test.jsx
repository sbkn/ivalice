import React from "react";
import renderer from "react-test-renderer";
import {DisplayCounter} from "../DisplayCounter.react.jsx";

it("should render correctly", () => {

	const tree = renderer.create(
		<DisplayCounter myProp="awesome">Hello World!</DisplayCounter>
	).toJSON();

	expect(tree).toMatchSnapshot();
});