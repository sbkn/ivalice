import React from "react";
import {shallow} from "enzyme";
import App from "../App.react.jsx";

describe("App", () => {

	it("should render correctly", () => {

		shallow(
			<App/>
		);
	});
});