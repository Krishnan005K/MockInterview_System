export const UPDATE_FORM = "UPDATE_FORM";
export const SET_ERRORS = "SET_ERRORS";

export const updateForm = (name, value) => ({
  type: UPDATE_FORM,
  payload: { name, value },
});

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  payload: errors,
});
