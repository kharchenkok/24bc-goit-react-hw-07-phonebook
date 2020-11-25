import { createReducer } from '@reduxjs/toolkit';
import { CLEAR_FORM, GET_FORM_VALUE } from "../constant";

const initialState = {
  name: "",
  number: "",
};

const contactFormReducer = createReducer(initialState,{
  [GET_FORM_VALUE]:(state,action)=>({ ...state, [action.payload.name]: action.payload.value }),
  [CLEAR_FORM]:(state,{payload})=>initialState
})


export default contactFormReducer;
