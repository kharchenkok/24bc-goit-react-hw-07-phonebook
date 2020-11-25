import { RESET_ERROR, SET_ERROR } from "../constant";

const initiallState = "";
const errorReducer = (state = initiallState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    case RESET_ERROR:
      return initiallState;
    default:
      return state;
  }
};

export default errorReducer;
