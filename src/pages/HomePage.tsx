import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>🏠 Home Page</h1>
      {auth?.user ? (
        <>
          <p>Salom, {auth.user.username}!</p>
          <button onClick={auth.logout}>🚪 Logout</button>
          <br />
          <Link to="/profile">👤 Profile sahifa</Link>
        </>
      ) : (
        <Link to="/login">🔑 Login qilish</Link>
      )}
    </div>
  );
};

export default HomePage;
