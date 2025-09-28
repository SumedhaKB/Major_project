import React, { useState } from "react";
import CompanyDetails from "./CompanyDetails";
import "./CompanySpecific.css";

export default function CompanyCard({ company }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="company-card">
      <h2>{company.name}</h2>
      <h4>{company.role}</h4>
      <p>{company.description}</p>
      <button
        className="details-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Click for More Details"}
      </button>

      {showDetails && <CompanyDetails company={company} />}
    </div>
  );
}
