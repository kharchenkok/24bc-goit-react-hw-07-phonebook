import { SET_ERROR, RESET_ERROR } from "../constant";

export const setError = (text) => ({
  type: SET_ERROR,
  payload: text,
});
export const resetError = () => ({
  type: RESET_ERROR,
});
