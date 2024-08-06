import { UPDATE_FORM, SET_ERRORS } from "./Action";

const initialState = {
  formValues: {
    username: "",
    email: "",
    password: "",
    dateOfBirth: "",
    registerNumber: "",
    year: "",
    department: "",
    section: "",
  },
  errors: {},
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.payload.name]: action.payload.value,
        },
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
