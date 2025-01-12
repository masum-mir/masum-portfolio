import React, { useState, useEffect } from "react";
import AnimatedLetters from "../utils/AnimatedLetter";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import emailjs from "emailjs-com";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const strAbout = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"];
  const GOOGLE_MAPS_API_KEY = "AIzaSyAN2ajE5BVblJHe7F6hZ4p__8DqMpiQBL4";
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 23.7621513,
    lng: 90.4224733,
  };

  const handleEmailClick = () => {
    const email = "masummir773@gmail.com";
    const subject = "inform masum";
    const body = "";

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ffmytdh", // Replace with your EmailJS Service ID
        "template_ermavzt", // Replace with your EmailJS Template ID
        formData,
        "FOxlBTfsiLIqM4zoC" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          setSuccessMessage("Email sent successfully!");
          setErrorMessage("");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          setErrorMessage("Failed to send email. Please try again.");
          setSuccessMessage("");
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={strAbout}
            index={15}
          />
        </h1>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
         
        <div className="email-container">
          {/* <div className="email-content">
          <button onClick={handleEmailClick} className="gmail-button">
          <svg 
            className="mail-icon" 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Send Email via Gmail
        </button>
        <p className="email-description">
          Click the button above to compose an email to: masummir773@gmail.com
        </p>
          </div> */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="from_email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send
            </button>
          </form>
          
        </div>
      </div>
      <div className="map-wrap" style={mapContainerStyle}>
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={false}
          style={mapContainerStyle}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>
              <b>Dhaka, Bangladesh</b>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript> */}
    </div>
  );
};

export default Contact;
