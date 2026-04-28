import { useState } from "react"
import { signup } from "../api/auth/auth"


import { useNavigate } from "react-router-dom"

export default function SignUpPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const navigate = useNavigate();

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        try {
            await signup(email, password, passwordConfirmation)
            navigate("/login");
        } catch {
            alert("Invalid. Check password confirmation matches and email is valid")
        }
    }

    return (
     <div className="auth-page">
      <div className="auth-card">
        <h1>Sign Up</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            className="auth-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />

          <button className="auth-button">Sign Up</button>
        </form>

        <div className="auth-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}