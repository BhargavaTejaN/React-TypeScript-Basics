import React, { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => setIsLoggedIn(true);

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <button onClick={handleLogin} type="button">
        Login
      </button>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
      <h3>user is {isLoggedIn ? "LoggedIn" : "Loggedout"}</h3>
    </div>
  );
};

export default LoggedIn;
