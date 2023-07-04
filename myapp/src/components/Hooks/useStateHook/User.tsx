import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () =>
    setUser({
      name: "Bhargava Teja",
      email: "user@gmail.com",
    });

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin} type="button">
        Login
      </button>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
      {user ? (
        <>
          <h3>user name is {user?.name}</h3>
          <h3>user email is {user?.email} </h3>
        </>
      ) : (
        <h4>Please Login</h4>
      )}
    </div>
  );
};

export default User;
