
import { createReducer } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACTS } from "../constant";

const initialState = [];

const contactsReducer = createReducer(initialState,{
  [ADD_CONTACT]:(state,{payload})=>[...state,payload],
  [SET_CONTACTS]:(state,{payload})=>payload,
  [DELETE_CONTACT]:(state,{payload})=>[...state.filter((contact) => contact.id !== payload)],

} ) 

// const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, payload];
//       case SET_CONTACTS:
//         return payload

//     case DELETE_CONTACT:
//       return [...state.filter((contact) => contact.id !== payload)];
//     default:
//       return state;
//   }
// };

export default contactsReducer;


