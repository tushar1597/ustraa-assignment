import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import reducer from "./reducers";

// const enhancer = global.window && global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__();

var middlewares = [];
middlewares.push(thunk);

if (process.env.NODE_ENV === "production") {
	const { createLogger } = require("redux-logger");

	const loggerMiddleware = createLogger();
	middlewares.push(loggerMiddleware);
}

const middlewareThunk = applyMiddleware(...middlewares);

export default function configureStore(preloadedState = {}) {
  return createStore(
    rootReducer,
    preloadedState,
    middlewareThunk
  )
};