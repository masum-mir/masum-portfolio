import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import {
  faLinkedinIn,
  faGithub, 
} from "@fortawesome/free-brands-svg-icons";
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
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <i class="fa fa-home"></i>home
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/about"
            className="about-link"
          > 
            <i class="fa fa-user"></i>about
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/skills"
            className="skill-link"
          > 
            <i class="fa fa-user"></i>skills
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/works"
            className="Works-link"
          > 
            <i class="fa fa-user"></i>works
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/contact"
            className="contact-link"
          >
            <i class="fa fa-envelope"></i>contact
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
        
          
      </header> 
  );
};

export default Navbar;
