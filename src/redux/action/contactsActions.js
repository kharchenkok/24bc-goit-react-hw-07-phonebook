import { ADD_CONTACT,DELETE_CONTACT, SET_CONTACTS} from "../constant";


export const addContact = (payload)=>({
    type:ADD_CONTACT,
    payload:{...payload}
   
})

export const setContacts = (payload)=>({
    type:SET_CONTACTS,
    payload
})
export const deleteContact = (payload)=>({
    type:DELETE_CONTACT,
    payload
})