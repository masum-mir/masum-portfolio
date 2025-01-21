import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false); 
  //   const [theme, setTheme] = UseLocalStroage("theme", "dark");

  //   const handleToggleTheme = () => {
  //     setTheme(theme === "light" ? "dark" : "light");
  //   };

  const closeNav = () => {
    setShowNav(false);
  };
 
  return (
    <header className="nav-bar">
      <Link className="logo" to="/" onClick={closeNav}>
        <img src={Logo} alt="Logo" />
      </Link>
      <nav className={showNav ? " active" : "mobile-menu"}>
        <NavLink exact="true" to="/" onClick={closeNav}>
          Home
        </NavLink>
        <NavLink
          exact="true"
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/about"
          onClick={closeNav}
        >
          About
        </NavLink>
        <NavLink
          exact="true"
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/skills"
          onClick={closeNav}
        >
          Skills
        </NavLink>
        <NavLink
          exact="true"
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/works"
          onClick={closeNav}
        >
          Works
        </NavLink>
        <NavLink
          exact="true"
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/contact"
          onClick={closeNav}
        >
          Contact
        </NavLink>
        {/* <NavLink className="change-theme" onClick={handleToggleTheme}>
            <p>Change Theme</p>
          </NavLink> */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/md-masum-mir"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
          </a>
          <a
            href="https://github.com/masum-mir"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </div>
      </nav>
      {/* Mobile Menu Toggle Button */}
      <button className="menu-toggle" onClick={() => setShowNav(!showNav)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Navbar;
