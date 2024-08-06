import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateForm, setErrors } from "../Redux/Action";
import "../Assets/Styles/Login.css";
import loginImage from "../Assets/Images/login-image.png";

function Login() {
  const dispatch = useDispatch();
  const formValues = useSelector((state) => state.form.formValues);
  const errors = useSelector((state) => state.form.errors);
  const navigate = useNavigate();

  const staticCredentials = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "interviewer@example.com", password: "interviewer123", role: "interviewer" },
    { email: "interviewee@example.com", password: "interviewee123", role: "interviewee" }
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateForm(name, value));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let tempErrors = { ...errors };

    if (name === "email") {
      if (!value) {
        tempErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        tempErrors.email = "Email is not valid";
      } else {
        delete tempErrors.email;
      }
    }

    if (name === "password") {
      if (!value) {
        tempErrors.password = "Password is required";
      } else if (value.length < 6) {
        tempErrors.password = "Password must be at least 6 characters long";
      } else {
        delete tempErrors.password;
      }
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
      const { email, password } = formValues;
      const user = staticCredentials.find(
        (cred) => cred.email === email && cred.password === password
      );

      if (user) {
        console.log("Login successful:", user);
        switch (user.role) {
          case "admin":
            navigate("/admindashboard");
            break;
          case "interviewer":
            navigate("/interviewerdashboard");
            break;
          case "interviewee":
            navigate("/intervieweedashboard");
            break;
          default:
            break;
        }
      } else {
        dispatch(setErrors({ ...errors, form: "Invalid email or password" }));
      }
    }
  };

  return (
    <div className="login-register-container">
      <div className="login-container">
        <div className="login-img">
          <img src={loginImage} alt="Login Illustration" />
        </div>
        <div className="login-subcls">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className="login-form">
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
            {errors.form && <p className="error">{errors.form}</p>}
            <button type="submit">Login</button>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
