import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Import CSS

export default function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">CareerCompanion</h1>
      <p className="landing-subtitle">
        Your AI-powered platform for company insights, interview preparation, and mock interviews.
      </p>
      <div className="landing-buttons">
        <Link to="/login" className="btn btn-login">
          Login
        </Link>
        <Link to="/signup" className="btn btn-signup">
          Signup
        </Link>
      </div>
    </div>
  );
}
