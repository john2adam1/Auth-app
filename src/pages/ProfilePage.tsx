import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProfilePage = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>👤 Profile Page</h1>
      <p>Foydalanuvchi: {auth?.user?.username}</p>
    </div>
  );
};

export default ProfilePage;
