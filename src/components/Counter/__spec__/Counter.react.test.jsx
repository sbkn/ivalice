import React from "react";
import renderer from "react-test-renderer";
import Counter from "../Counter.react.jsx";

describe("Counter", () => {

	it("should render correctly", () => {

		const tree = renderer.create(
			<Counter/>
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
