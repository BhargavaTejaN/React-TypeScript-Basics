import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    if (userContext) {
      userContext.setuser({
        name: "Bhargava Teja",
        email: "user@gmail.com",
      });
    }
  };

  const handleLogout = () => {
    if (userContext) {
      userContext.setuser(null);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {userContext?.user ? (
        <>
          <h3>user name is {userContext?.user?.name}</h3>
          <h3>user email is {userContext?.user?.email}</h3>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default User;
