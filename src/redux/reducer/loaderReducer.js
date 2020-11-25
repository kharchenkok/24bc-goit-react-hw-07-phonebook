import { createReducer } from '@reduxjs/toolkit';
import { LOADER_OFF, LOADER_ON } from "../constant";

const initiallState = false;

const loaderReducer= createReducer(initiallState, {
  [LOADER_ON]:(state,action)=>true,
  [LOADER_OFF]:(state,action)=>false
}) 


export default loaderReducer