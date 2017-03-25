import React from "react";
import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import {Provider} from "react-redux";
import reducer from "./containers/ConnectedButton/ConnectedButton.reducer.js";
import FirstView from "./containers/FirstView/FirstView.react.jsx";

const reducers = {
	counter: reducer
};
const combinedReducer = combineReducers(reducers);
const middleware = applyMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combinedReducer, composeEnhancers(middleware));

const App = () => (
	<Provider store={ store }>
		<FirstView/>
	</Provider>
);

export default App;

