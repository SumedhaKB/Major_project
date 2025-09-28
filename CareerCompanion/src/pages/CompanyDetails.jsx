import React from "react";
import { useParams, Link } from "react-router-dom";
import { companies } from "../data/companies";
import "./CompanySpecific.css";

export default function CompanyDetailPage() {
  const { name } = useParams();
  const company = companies.find(c => c.name === name);

  if (!company) return <h2>Company not found!</h2>;

  return (
    <div className="company-details-page">
      <Link to="/company-specific" className="back-button">← Back to Companies</Link>
      <h1>{company.name}</h1>
      <h3>{company.role}</h3>
      <p>{company.overview}</p>

      {company.rounds.map((round, index) => (
        <div key={index} className="round-section">
          <h4>{round.title}</h4>
          <p>{round.details}</p>
          <button className="practice-button">Practice</button>
          <button className="mock-button">Mock Test</button>
        </div>
      ))}
    </div>
  );
}
