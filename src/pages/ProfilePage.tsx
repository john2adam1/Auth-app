import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const auth = useContext(AuthContext);

  if (!auth) return null;

  return (
    <div>
      <h1>👤 Profile Page</h1>
      {auth.user ? (
        <p>Foydalanuvchi: {auth.user.username}</p>
      ) : (
        <p>Hech qanday foydalanuvchi login qilmagan</p>
      )}

      {/* Ortga tugma */}
      <br />
      <Link to="/">
        <button>⬅️ Ortga (Home Page)</button>
      </Link>
    </div>
  );
};

export default ProfilePage;
