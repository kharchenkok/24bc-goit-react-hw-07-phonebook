
import { createReducer } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACTS } from "../constant";

const initialState = [];

const contactsReducer = createReducer(initialState,{
  [ADD_CONTACT]:(state,{payload})=>[...state,payload],
  [SET_CONTACTS]:(state,{payload})=>payload,
  [DELETE_CONTACT]:(state,{payload})=>[...state.filter((contact) => contact.id !== payload)],

} ) 



export default contactsReducer;


