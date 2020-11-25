import { createReducer } from '@reduxjs/toolkit';
import { RESET_ERROR, SET_ERROR } from "../constant";

const initiallState=''
const errorReducer= createReducer(initiallState,{
    [SET_ERROR]:(state,{payload})=>payload,
    [RESET_ERROR]:(state,{payload})=>initiallState,
})


export default errorReducer