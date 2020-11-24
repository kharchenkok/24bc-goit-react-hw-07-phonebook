import { LOADER_OFF, LOADER_ON } from "../constant";

const initiallState = false;
const loaderReducer= (state = initiallState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return true;
    case LOADER_OFF:
      return false;

    default:
      return state;
  }
};

export default loaderReducer