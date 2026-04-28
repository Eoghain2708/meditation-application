import { useState } from "react";
import { login } from "../api/auth/auth";

import { useNavigate } from "react-router-dom";
import { saveToken } from "../api/auth/token";

import "./styles/authPages.css"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault()

        try {
            const data = await login(email, password);
            saveToken(data.token);
            navigate("/meditations")
        } catch {
            alert("Invalid email or password")
        }
    }

    return (
        <div className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>

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

          <button className="auth-button">Login</button>
        </form>

        <div className="auth-link">
          Don't have an account? <a href="/">Sign up</a>
        </div>
      </div>
    </div>
    )
}