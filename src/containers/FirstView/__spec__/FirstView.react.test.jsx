import React from "react";
import {shallow} from "enzyme";
import FirstView from "../FirstView.react.jsx";

describe("FirstView", () => {

	it("should render correctly", () => {

		shallow(
			<FirstView/>
		);
	});
});