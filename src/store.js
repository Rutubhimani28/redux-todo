import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import { TodoReducer } from "./reducers/todoReducers";

const reducer = combineReducers({
    Todo: TodoReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store