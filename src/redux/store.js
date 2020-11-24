import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducer/rootReducer'

const middleWares=[thunk]
const rootMiddleWares = applyMiddleware(...middleWares)
const compose = composeWithDevTools(rootMiddleWares)

const store=createStore(rootReducer,compose)

export default store