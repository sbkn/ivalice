import {INCREMENT_COUNTER} from "./ConnectedButton.constants.js"

export function incrementCounter(payload) {
	return {type: INCREMENT_COUNTER, payload}
}