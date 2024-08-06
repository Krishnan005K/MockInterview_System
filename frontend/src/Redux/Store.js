import { createStore, combineReducers } from "redux";
import formReducer from "./Reducer";

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
