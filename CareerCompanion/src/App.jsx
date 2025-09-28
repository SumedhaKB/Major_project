import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import CompanySpecific from "./pages/CompanySpecific";
import GeneralPrep from "./pages/GeneralPrep";
import AIMockInterview from "./pages/AIMockInterview";
import CompanyDetails from "./pages/CompanyDetails";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/company-specific" element={<CompanySpecific />} />
        <Route path="/company/:name" element={<CompanyDetails/>} />
        <Route path="/general-prep" element={<GeneralPrep />} />
        <Route path="/ai-mock-interview" element={<AIMockInterview />} />
      </Routes>
    </Router>
  );
}
