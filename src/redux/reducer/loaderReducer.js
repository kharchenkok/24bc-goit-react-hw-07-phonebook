import { createReducer } from '@reduxjs/toolkit';
import { LOADER_OFF, LOADER_ON } from "../constant";

const initiallState = false;

const loaderReducer= createReducer(initiallState, {
  [LOADER_ON]:(state,action)=>true,
  [LOADER_OFF]:(state,action)=>false
}) 
// const loaderReducer= (state = initiallState, action) => {
//   switch (action.type) {
//     case LOADER_ON:
//       return true;
//     case LOADER_OFF:
//       return false;

//     default:
//       return state;
//   }
// };

export default loaderReducer