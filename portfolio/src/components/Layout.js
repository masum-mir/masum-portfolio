import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <div className="container"> 
      <div className="star">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;
