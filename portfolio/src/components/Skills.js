import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../utils/AnimatedLetter';
import {
  faJava,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const strSkills = ["S", "k", "i", "l", "l", "s"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="skill-page">
      <div className="text-zone">
      <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={strSkills}
            index={15}
          />
        </h1>

        <div className="skills-zone"> 
          <ul>
            <li>Java Development</li>
            <li>Spring Framework</li>
            <li>Frontend Development (React, HTML, CSS, JavaScript)</li>
            <li>Git and Version Control</li>
          </ul>
          <p className="link">
            Visit my <a href="https://www.linkedin.com/in/md-masum-mir" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile for more details. Also, you can check out
            <br/> my CV on this <a href="https://github.com/masum-mir/my-portfolio/blob/main/resume.pdf" target="_blank" rel="noopener noreferrer">link</a>.
          </p>
        </div> 
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJava} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div> 
          <div className="face6">
            <img
              src="https://cdn.worldvectorlogo.com/logos/spring-3.svg"
              alt="Spring Logo"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Skills;
