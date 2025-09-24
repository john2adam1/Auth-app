import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  if (!auth) return null;

  const handleLogin = () => {
    if (!username.trim()) {
      alert("Username kiritish shart!");
      return;
    }
    auth.login(username);
    navigate("/profile");
  };

  return (
    <div>
      <h1>🔑 Login Page</h1>
      <input
        type="text"
        placeholder="Username kiriting"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
