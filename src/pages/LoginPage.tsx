import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return alert("Username kiritish shart!");

    auth?.login(username);
    navigate("/profile");
  };

  return (
    <div>
      <h1>🔑 Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username kiriting..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default LoginPage;
