import { createAction } from '@reduxjs/toolkit';
import { CLEAR_FORM, GET_FORM_VALUE} from "../constant";


export const getContactFormValue = createAction(GET_FORM_VALUE)
export const clearForm =createAction(CLEAR_FORM)


