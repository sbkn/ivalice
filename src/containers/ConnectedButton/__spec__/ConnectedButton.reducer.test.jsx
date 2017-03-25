import React from "react";
import {Map} from "immutable";
import {reducer} from "../ConnectedButton.reducer.js";
import {INCREMENT_COUNTER} from "../ConnectedButton.constants.js";

describe("Reducer", () => {

	it("should return the initial state", () => {

		expect(
			reducer(undefined, {})
		).toEqual(Map({
			count: 0
		}))
	});

	it("should increment by 1", () => {

		expect(
			reducer(undefined, {type: INCREMENT_COUNTER})
		).toEqual(Map({
			count: 1
		}))
	});

	it("should increment by given payload", () => {

		expect(
			reducer(undefined, {type: INCREMENT_COUNTER, payload: 3})
		).toEqual(Map({
			count: 3
		}))
	});
});
