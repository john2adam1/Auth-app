import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const auth = useContext(AuthContext);

  if (!auth) return null;

  return (
    <div>
      <h1>🏠 Home Page</h1>
      {auth.user ? (
        <>
          <p>Salom, {auth.user.username}!</p>
          <button onClick={auth.logout}>🚪 Logout</button>
          <br />
          <Link to="/profile">👤 Profile sahifa</Link>
        </>
      ) : (
        <Link to="/login">🔑 Login sahifaga o‘tish</Link>
      )}
    </div>
  );
};

export default HomePage;
