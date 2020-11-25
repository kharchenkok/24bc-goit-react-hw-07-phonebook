import axios from 'axios'
import { clearForm } from '../action/contactFormActions'
import { addContact, deleteContact, setContacts } from '../action/contactsActions'
import {setError,resetError} from "../action/errorActions"
import { loaderOff, loaderOn } from '../action/loaderActions'

// const options={
//     header:{'Content-Type': 'application/json'}
// }
axios.defaults.baseURL = 'http://localhost:2000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getContactsOperation=()=>async(dispatch)=>{
    try {
       dispatch(loaderOn()) 
       const result=await axios.get('/contacts')
       dispatch(setContacts(result.data))
    //    console.log("getContactsOperation", result);
       
    } catch (error) {
        dispatch(setError('Something wrong'))
    }finally{
        dispatch(loaderOff())
        dispatch(resetError())
    }
}

export const addContactsOperation=(contacts)=>async(dispatch)=>{
    try {
        dispatch(loaderOn())
        await axios.post('/contacts',contacts).then(data=>dispatch(addContact(data.data)))
        // console.log("postContactsOperation", result);
        // dispatch(addContact(result.data))
        dispatch(clearForm())
    
    } catch (error) {
        dispatch(setError('Something wrong'))
    }finally{
        dispatch(loaderOff())
        dispatch(resetError())
    }
}

export const deleteContactsOperation=(id)=>async(dispatch)=>{
    try {
        dispatch(loaderOn())
        // const result=await axios.delete(`http://localhost:2000/contacts/${id}`).then(()=>dispatch(deleteContact(id)))
    
        await axios.delete(`/contacts/${id}`)
        dispatch(deleteContact(id))
        // console.log('delete', result)
        
    } catch (error) {
        dispatch(setError('Something wrong'))
    }finally{
        dispatch(loaderOff())
        dispatch(resetError())
    }
}