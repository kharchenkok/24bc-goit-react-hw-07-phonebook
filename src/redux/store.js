import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";

import rootReducer from "./reducer/rootReducer";
import { GET_FORM_VALUE, GET_FILTER_VALUE } from "./constant";



const store=configureStore({
    reducer:rootReducer,
    middleware:()=>getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [GET_FORM_VALUE,GET_FILTER_VALUE],
        },
    })
})

export default store;


// const defaultMiddleware = ()=>getDefaultMiddleware({
//     serializableCheck: {
//         ignoredActions: [GET_FORM_VALUE],
//       },
// });
// console.log('defaultMiddleware',defaultMiddleware);

// const store = configureStore({
//   reducer: rootReducer,
//   middleware:defaultMiddleware(),
    
  
// });
