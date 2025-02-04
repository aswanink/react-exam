// Header.js
import React, { useState } from "react";
import "../styles/Header.css";
import "../styles/global.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("why-fudo");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <div className="logo">Fudo</div>
      <nav>
        <ul>
          <li>
            <a
              href="#"
              className={activeLink === "why-fudo" ? "active" : ""}
              onClick={() => handleLinkClick("why-fudo")}
            >
              Why Fudo?
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === "services" ? "active" : ""}
              onClick={() => handleLinkClick("services")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === "menu" ? "active" : ""}
              onClick={() => handleLinkClick("menu")}
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === "contact" ? "active" : ""}
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </li>
          <li>
            <button className="login-btn">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
