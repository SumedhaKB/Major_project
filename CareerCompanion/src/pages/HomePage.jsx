import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import CSS

export default function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to CareerCompanion</h1>
      <div className="card-grid">
        <Link to="/company-specific" className="card">
          <h2 className="card-title">Company Specific</h2>
          <p className="card-description">
            Explore company-wise profiles, eligibility, and past questions.
          </p>
        </Link>
        <Link to="/general-prep" className="card">
          <h2 className="card-title">General Prep</h2>
          <p className="card-description">
            Practice aptitude, coding, HR, and GD rounds with mock tests.
          </p>
        </Link>
        <Link to="/ai-mock-interview" className="card">
          <h2 className="card-title">AI Mock Interview</h2>
          <p className="card-description">
            Get personalized AI-driven interview simulations and feedback.
          </p>
        </Link>
      </div>
    </div>
  );
}
