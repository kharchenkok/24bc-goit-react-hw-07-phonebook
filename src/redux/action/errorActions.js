import { createAction } from '@reduxjs/toolkit';
import { SET_ERROR, RESET_ERROR } from "../constant";



export const setError = createAction(SET_ERROR)
export const resetError =createAction (RESET_ERROR) 


// export const setError = (text) => ({
//   type: SET_ERROR,
//   payload:text

// });
// export const resetError = () => ({
//   type: RESET_ERROR,


// });