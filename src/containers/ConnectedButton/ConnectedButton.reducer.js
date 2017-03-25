import {Map} from "immutable";
import {INCREMENT_COUNTER} from "./ConnectedButton.constants.js";

const initialState = Map({count: 0});

export const reducer = (state = initialState, action) => {

	switch (action.type) {
		case INCREMENT_COUNTER:
			return state.set("count", state.get("count") + action.payload);

		default:
			return state
	}
};