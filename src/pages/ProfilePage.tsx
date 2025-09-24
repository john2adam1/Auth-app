import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

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
    </div>
  );
};

export default ProfilePage;
