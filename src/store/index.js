import { createStore } from "redux";
import addTask from "./reducer";

export const store = createStore(addTask);
