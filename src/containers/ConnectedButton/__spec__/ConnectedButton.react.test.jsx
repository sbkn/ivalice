import React from "react";
import renderer from "react-test-renderer";
import {ConnectedButton} from "../ConnectedButton.react.jsx";

describe("ConnectedButton", () => {

	it("should render correctly", () => {

		const tree = renderer.create(
			<ConnectedButton/>
		).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should handle onClick", () => {

		const dispatchMock = jest.fn();

		const tree = renderer.create(
			<ConnectedButton dispatch={dispatchMock}/>
		).toJSON();

		tree.props.onClick();

		expect(dispatchMock.mock.calls.length).toBe(1);

	});
});
