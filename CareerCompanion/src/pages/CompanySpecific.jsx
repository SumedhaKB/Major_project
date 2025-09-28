import React from "react";
import { companies } from "../data/companies";
import { Link } from "react-router-dom";
import "./CompanySpecific.css";

export default function CompanySpecific() {
  return (
    <div className="company-container">
      <h1 className="company-title">Company Specific Preparation</h1>
      <p className="company-description">
        Here you can access company profiles, eligibility, and past questions.
      </p>
      <div className="company-cards">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <h2>{company.name}</h2>
            <h4>{company.role}</h4>
            <p>{company.description}</p>
            <Link to={`/company/${company.name}`} className="details-button">
              Click for More Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
