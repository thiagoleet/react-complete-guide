// helper functions
import { checkEmailIsValid, checkPasswordIsValid } from "../../helpers";

export const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: checkEmailIsValid(action.value) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: checkEmailIsValid(state.value) };
  }
  return { value: "", isValid: false };
};

export const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: checkPasswordIsValid(action.value) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: checkPasswordIsValid(state.value) };
  }
  return { value: "", isValid: false };
};
