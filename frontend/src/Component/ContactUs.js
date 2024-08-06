import React, { useState } from "react";
import "../Assets/Styles/ContactUs.css"; // Ensure this file is created for styles
import { Link } from "react-router-dom";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(""); // State to hold error messages

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (error) { // Clear the error message when user starts typing
      setError("");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (error) { // Clear the error message when user starts typing
      setError("");
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    if (error) { // Clear the error message when user starts typing
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) { // Check if any field is empty
      setError("Please fill in all fields.");
      return;
    }
    setError(""); // Clear the error message
    // Handle form submission
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Possibly send data to an API or handle it as needed
  };

  return (
    <div className="contactus-container">
      <div className="contactus-form">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={handleMessageChange}
          />
          {error && <p className="error-message">{error}</p>} {/* Conditionally render error message */}
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
