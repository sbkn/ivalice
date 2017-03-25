import {INCREMENT_COUNTER} from "./CounterButton.constants.js"

export function incrementCounter(payload) {
	return {type: INCREMENT_COUNTER, payload}
}