import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateForm, setErrors } from "../Redux/Action";
import "../Assets/Styles/Register.css";
import registerImage from "../Assets/Images/register-image.png";

function Register() {
  const dispatch = useDispatch();
  const formValues = useSelector((state) => state.form.formValues);
  const errors = useSelector((state) => state.form.errors);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateForm(name, value));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let tempErrors = { ...errors };

    if (name === "username" && !value) {
      tempErrors.username = "Username is required";
    } else if (name === "username") {
      delete tempErrors.username;
    }

    if (name === "email" && !value) {
      tempErrors.email = "Email is required";
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      tempErrors.email = "Email is not valid";
    } else if (name === "email") {
      delete tempErrors.email;
    }

    if (name === "password" && !value) {
      tempErrors.password = "Password is required";
    } else if (name === "password" && value.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long";
    } else if (name === "password") {
      delete tempErrors.password;
    }

    if (name === "dateOfBirth" && !value) {
      tempErrors.dateOfBirth = "Date of Birth is required";
    } else if (name === "dateOfBirth") {
      delete tempErrors.dateOfBirth;
    }

    if (name === "role" && !value) {
      tempErrors.role = "Role selection is required";
    } else if (name === "role") {
      delete tempErrors.role;
    }

    dispatch(setErrors(tempErrors));
  };

  const validate = () => {
    let valid = true;
    for (let field in formValues) {
      validateField(field, formValues[field]);
      if (errors[field]) valid = false;
    }
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Form data:", formValues);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-img">
          <img src={registerImage} alt="Register Illustration" />
        </div>
        <div className="register-subcls">
          <h1>Register</h1>
          <form onSubmit={handleSubmit} className="register-form">
            <div>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formValues.username}
                onChange={handleChange}
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formValues.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
              <input
                id="dateOfBirth"
                type="date"
                name="dateOfBirth"
                value={formValues.dateOfBirth}
                onChange={handleChange}
              />
              {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
            </div>
            <div>
              <select
                id="role"
                name="role"
                value={formValues.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                <option value="Interviewer">Interviewer</option>
                <option value="Interviewee">Interviewee</option>
              </select>
              {errors.role && <p className="error">{errors.role}</p>}
            </div>
            
            <button type="submit">Register</button>
            <p>
              Already have an account? <Link to="/signin">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
