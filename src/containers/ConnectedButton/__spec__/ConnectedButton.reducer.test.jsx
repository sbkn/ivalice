import React from "react";
import reducer from "../ConnectedButton.reducer.js";
import {INCREMENT_COUNTER} from "../ConnectedButton.constants.js";


describe("Reducer", () => {

	it("should return the initial state", () => {

		expect(
			reducer(undefined, {})
		).toEqual({
			count: 0
		})
	});

	it("should increment by 1", () => {

		expect(
			reducer(undefined, {type: INCREMENT_COUNTER})
		).toEqual({
			count: 1
		})
	});

	it("should increment by given payload", () => {

		expect(
			reducer(undefined, {type: INCREMENT_COUNTER, payload: 3})
		).toEqual({
			count: 3
		})
	});
});
