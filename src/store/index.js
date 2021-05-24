import { createStore, compose } from "redux";
import addTask from "./reducer";

let composeEnhancers = compose;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState) {
  let sessionDetails = localStorage.getItem("task-handler")
    ? JSON.parse(localStorage.getItem("task-handler"))
    : null;
  if (sessionDetails) {
    debugger;
    initialState = sessionDetails;
  }
  const store = createStore(addTask, initialState, composeEnhancers());
  return store;
}

export default configureStore();
