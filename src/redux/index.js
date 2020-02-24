import todos from "./reducers/todos";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  todoList: todos
});

export default allReducers;
