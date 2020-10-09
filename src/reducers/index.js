import {combineReducers} from "redux";
import optionsReducer from "./optionsReducer";
import stepsReducer from "./stepsReducer";

const reducer = combineReducers({
    options: optionsReducer,
    steps: stepsReducer
})

export default reducer
