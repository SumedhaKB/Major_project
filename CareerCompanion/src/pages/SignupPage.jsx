import { useNavigate } from "react-router-dom";
import "./SignupPage.css"; // import CSS

export default function SignupPage() {
  const navigate = useNavigate(); // hook for navigation

  const handleSignup = () => {
    // Add your signup logic here (API call, Firebase auth, etc.)

    // Redirect to Home page
    navigate("/home");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Signup</h2>
        <input type="text" placeholder="Full Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button onClick={handleSignup} className="btn-signup">
          Signup
        </button>
      </div>
    </div>
  );
}
