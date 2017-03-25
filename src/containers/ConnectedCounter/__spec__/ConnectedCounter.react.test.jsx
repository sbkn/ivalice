import React from "react";
import renderer from "react-test-renderer";
import {ConnectedCounter} from "../ConnectedCounter.react.jsx";
import {mapStateToProps} from "../ConnectedCounter.react.jsx";

describe("ConnectedCounter", () => {

	it("should render correctly", () => {

		const tree = renderer.create(
			<ConnectedCounter>Hello World!</ConnectedCounter>
		).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("mapStateToProps should map state correctly ", () => {

		const mockState = {
			counter: {}
		};

		expect(mapStateToProps(mockState)).toEqual({count: undefined});
	});
});