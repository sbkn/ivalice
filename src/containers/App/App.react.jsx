import React from "react";
import {applyMiddleware, createStore, compose} from "redux";
import {combineReducers} from "redux-immutable";
import {Provider} from "react-redux";
import BlueKit from "react-bluekit";
import {Map} from "immutable";
import {reducer as buttonReducer} from "../ConnectedButton/ConnectedButton.reducer.js";
import componentsIndex from "../../componentsIndex";

const reducers = {
	counter: buttonReducer
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware();

const initialState = Map();
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, initialState, composeEnhancers(middleware));

const App = () => (
	<Provider store={ store }>
		<BlueKit
			componentsIndex={componentsIndex}
			name="Ivalice"
		/>
	</Provider>
);

export default App;

