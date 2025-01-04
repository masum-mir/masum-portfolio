import React, { useState, useEffect } from "react";
import AnimatedLetters from "../utils/AnimatedLetter";


const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const strAbout = ["A", "b", "o", "u", "t", " ", "m", "e"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-page">
      
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={strAbout}
            index={15}
          />
        </h1>
        <p>
          "I began my journey as a junior software engineer at Pridesys IT Ltd.,
          where I contributed to building robust enterprise solutions.
          Currently, I’m focused on expanding my knowledge while pursuing a BSc
          in Computer Science at East West University. I am passionate about
          learning cutting-edge technologies and contributing to innovative
          projects."
        </p> 
      </div> 
      
    </div>
  );
};

export default About;
