import React from "react";
import { useState, useEffect } from "react";
import AnimatedLetters from "../utils/AnimatedLetter";
import { Link } from "react-router-dom";
import Loader from "react-loaders"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [" ", "M", "a", "s", "u", "m."];

  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
      
      return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section className="home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
          </h1>
          <h2>Software Developer | Turning Ideas into Interactive Digital Experiences</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div> 
      </section> 
    </div>
  );
};

export default Home;
