import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT,DELETE_CONTACT, SET_CONTACTS} from "../constant";


export const addContact = createAction(ADD_CONTACT,payload=>({payload:{...payload}})) 

export const setContacts = createAction(SET_CONTACTS) 

export const deleteContact = createAction(DELETE_CONTACT)



// export const addContact = (payload)=>({
//     type:ADD_CONTACT,
//     payload:{...payload}
   
// })

// export const setContacts = (payload)=>({
//     type:SET_CONTACTS,
//     payload
// })
// export const deleteContact = (payload)=>({
//     type:DELETE_CONTACT,
//     payload
// })