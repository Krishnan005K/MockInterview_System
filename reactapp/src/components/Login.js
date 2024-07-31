import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from '../assets/images/login img.png';
import '../assets/style/Login.css';
import Navbar from "./Navbar";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});

            const { email, password } = formData;

            // Static validation for the provided credentials
            if (email === 'Admin@gmail.com' && password === 'Admin@123') {
                navigate("/admin-dashboard");
            } else if (email === 'Interviewer@gmail.com' && password === 'Interviewer@123') {
                navigate("/interviewer-dashboard");
            } else if (email === 'Coder@gmail.com' && password === 'Coder@12345') {
                navigate("/coder-dashboard");
            } else {
                setErrors({ email: 'Invalid email or password' });
            }
        }
    };

    return (
        <div className="background-wrapper">
            <Navbar/>
            <div className="login-container">
                <div className="whole">
                    <div className="left-half">
                        <img src={img} alt="login" />
                    </div>
                    <div className="right-half">
                        <form onSubmit={handleSubmit} className="login-form">
                            <h1>Login</h1>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error-input' : ''}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}

                            <input
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={errors.password ? 'error-input' : ''}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}

                            <button type="submit">Login</button>
                            <div className="links">
                                <p><Link to="/forgot-password">Forgot Password?</Link></p>
                                <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
