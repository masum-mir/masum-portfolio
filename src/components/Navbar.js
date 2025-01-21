import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import {
  faLinkedinIn,
  faGithub, 
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
//   const [theme, setTheme] = UseLocalStroage("theme", "dark");

//   const handleToggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

  return (
    <header className="nav-bar" > 
        <Link className="logo" to="/" onClick={() => setShowNav(false)}>
          <img src={Logo} alt="Logo" />
        </Link>
        <nav className={showNav ? "mobile-menu active" : "mobile-menu"}>
          <NavLink exact="true"  to="/">
             Home
          </NavLink>
          <NavLink
            exact="true"
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about" 
          > 
             About
          </NavLink>
          <NavLink
            exact="true" className={({ isActive }) => (isActive ? "active" : "")}
            
            to="/skills" 
          > 
             Skills
          </NavLink>
          <NavLink
            exact="true" className={({ isActive }) => (isActive ? "active" : "")}
            to="/works" 
          > 
            Works
          </NavLink>
          <NavLink
            exact="true"
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact" 
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
