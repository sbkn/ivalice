import {INCREMENT_COUNTER} from "./ConnectedButton.constants.js";

const initialState = {
	count: 0
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case INCREMENT_COUNTER:
			return {
				...state,
				count: state.count + action.payload | 1
			};

		default:
			return state
	}
};

export default reducer;