import React, { useState } from "react";
import "../Assets/Styles/Feedback.css";
import { Link, useNavigate } from "react-router-dom";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState(""); // State to hold error messages
  const navigate = useNavigate();
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
    if (error) { // Clear the error message when user starts typing
      setError("");
    }
  };

  const handleRatingChange = (rating) => {
    setRating(rating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!feedback.trim()) { // Check if feedback is empty or only whitespace
      setError("Please fill your thoughts.");
      return;
    }
    setError(""); // Clear the error message
    // Handle form submission
    console.log("Feedback:", feedback);
    console.log("Rating:", rating);
     navigate('/')
  };

  return (
    <div className="feedback-container">
      <div className="feedback-form">
        <h1>We Value Your Feedback!</h1>
        <form onSubmit={handleSubmit}>
          <div className="rating-section">
            <span
              className={`emoji ${rating === "1" ? "selected" : ""}`}
              onClick={() => handleRatingChange("1")}
            >
              😡
            </span>
            <span
              className={`emoji ${rating === "2" ? "selected" : ""}`}
              onClick={() => handleRatingChange("2")}
            >
              😕
            </span>
            <span
              className={`emoji ${rating === "3" ? "selected" : ""}`}
              onClick={() => handleRatingChange("3")}
            >
              😐
            </span>
            <span
              className={`emoji ${rating === "4" ? "selected" : ""}`}
              onClick={() => handleRatingChange("4")}
            >
              🙂
            </span>
            <span
              className={`emoji ${rating === "5" ? "selected" : ""}`}
              onClick={() => handleRatingChange("5")}
            >
              😍
            </span>
          </div>
          <textarea
            placeholder="Share your thoughts..."
            value={feedback}
            onChange={handleFeedbackChange}
          />
          {error && <p className="error-message">{error}</p>} {/* Conditionally render error message */}
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
