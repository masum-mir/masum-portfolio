import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";
 
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
            <i class="fa fa-user"></i>Skills
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/Works"
            className="Works-link"
          > 
            <i class="fa fa-user"></i>Works
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
        </nav>
      </header> 
  );
};

export default Navbar;
