import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Import CSS

export default function LoginPage() {
  const navigate = useNavigate(); // hook for navigation

  const handleLogin = () => {
    // Add your signup logic here (API call, Firebase auth, etc.)

    // Redirect to Home page
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button onClick={handleLogin} className="btn-login">
          Login
        </button>
      </div>
    </div>
  );
}
