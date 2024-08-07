import React, { useState } from "react";
import "../stylings/Navbar.css";
import googleImage from "../assets/google.png";
import Login from "./Login";
import Logo from "../assets/projicon.png";

export default function Navbar({
  showLogin,
  setShowLogin,
  loginStatus,
  setLoginStatus,
  user,
  setUser,
  isEmployee,
  setIsEmployee
}) {
  const handleGoogleAuthClick = () => {
    setShowLogin(true);
  };

  const handleLogout = () => {
    setLoginStatus(false);
    setUser(null);
    setShowLogin(false);
  };

  return (
    <nav className="navbar">
      <h3 className="logo" style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} style={{ height: "40px", width: "40px" }} alt="Logo" /> ClothePlus
      </h3>
      <ul className="nav-menu">
        <li className="nav-item">
          <a className="bruh" href="\">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="\upload">Upload Image</a>
        </li>

      </ul>
      <div className="auth-section">
        {loginStatus ? (
          <>
            <p className="welcome-message">Welcome {user}</p>
            <button className="button-55" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : showLogin ? (
          <Login
            loginStatus={loginStatus}
            user={user}
            setLoginStatus={setLoginStatus}
            setUser={setUser}
            isEmployee={isEmployee}
            setIsEmployee={setIsEmployee}
          />
        ) : (
          <button className="button-55" onClick={handleGoogleAuthClick}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
