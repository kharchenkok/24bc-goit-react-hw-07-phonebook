import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/rootReducer";
import { GET_FORM_VALUE, GET_FILTER_VALUE } from "./constant";



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

const store=configureStore({
    reducer:rootReducer,
    middleware:()=>getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [GET_FORM_VALUE,GET_FILTER_VALUE],
          },
    })
})

export default store;


