import contactFormReducer from "./contactFormReducer";
import contactsReducer from "./contactsReducer";
import errorReducer from "./errorReducer";
import filterReducer from "./filterReducer";
import loaderReducer from "./loaderReducer";

const { combineReducers } = require("redux");

const rootReducer=combineReducers({
    contacts:contactsReducer,
    filter:filterReducer,
    formContact:contactFormReducer,
    error:errorReducer,
    loader:loaderReducer
})

export default rootReducer