import React from "react";
import renderer from "react-test-renderer";
import Button from "../Button.react.jsx";

describe("Button", () => {

	it("should render correctly", () => {

		const tree = renderer.create(
			<Button/>
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
