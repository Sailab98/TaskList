import { createStore, compose } from "redux";
import addTask from "./reducer";

let composeEnhancers = compose;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(addTask, composeEnhancers());
