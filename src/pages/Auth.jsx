import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!email.trim()) {
      alert("Email is required");
      return;
    }
    if (!password.trim()) {
      alert("Password is required");
      return;
    }
    
    setIsLoading(true);
    
    // Dummy loading - simulate network request
    setTimeout(() => {
      setIsLoading(false);
      navigate("/regional-bank");
    }, 1500);
  };

  return (
    <div style={{
      height: "100vh",
      width: "100%",
      background: "#F0F4F8",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      overflow: "hidden",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 24,
        padding: "36px 28px",
        width: "100%",
        maxWidth: 400,
        boxShadow: "0 4px 24px rgba(42,143,212,0.08)",
        maxHeight: "90vh",
        overflowY: "auto",
      }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 16,
            background: "linear-gradient(135deg, #1A7EC4, #5BB8F5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 14px",
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          </div>
          <p style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#1A2B3C" }}>Welcome back</p>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: "#8A9BB0" }}>Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <p style={{ margin: "0 0 6px", fontSize: 12, fontWeight: 600, color: "#5A7290" }}>Email <span style={{ color: "red" }}>*</span></p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 12,
                border: "1.5px solid #E0ECF8",
                fontSize: 14,
                color: "#1A2B3C",
                outline: "none",
                boxSizing: "border-box",
                background: isLoading ? "#F0F4F8" : "#F8FBFE",
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? "not-allowed" : "text",
              }}
            />
          </div>

          <div>
            <p style={{ margin: "0 0 6px", fontSize: 12, fontWeight: 600, color: "#5A7290" }}>Password <span style={{ color: "red" }}>*</span></p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 12,
                border: "1.5px solid #E0ECF8",
                fontSize: 14,
                color: "#1A2B3C",
                outline: "none",
                boxSizing: "border-box",
                background: isLoading ? "#F0F4F8" : "#F8FBFE",
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? "not-allowed" : "text",
              }}
            />
          </div>

          <p style={{ margin: "0", textAlign: "right", fontSize: 12, color: "#2A8FD4", fontWeight: 600, cursor: "pointer" }}>
            Forgot password?
          </p>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              marginTop: 6,
              padding: "14px",
              borderRadius: 14,
              border: "none",
              background: isLoading ? "#B0D4F5" : "linear-gradient(135deg, #1A7EC4, #5BB8F5)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              cursor: isLoading ? "not-allowed" : "pointer",
              letterSpacing: 0.3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {isLoading ? (
              <>
                <span style={{
                  display: "inline-block",
                  width: "16px",
                  height: "16px",
                  border: "2px solid white",
                  borderTop: "2px solid transparent",
                  borderRadius: "50%",
                  animation: "spin 0.8s linear infinite",
                }} />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p style={{ margin: "20px 0 0", textAlign: "center", fontSize: 13, color: "#8A9BB0" }}>
          Don't have an account?{" "}
          <span style={{ color: "#2A8FD4", fontWeight: 700, cursor: "pointer" }}>Sign up</span>
        </p>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}