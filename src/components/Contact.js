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

const INITIAL_FORM_STATE = {
  from_name: "",
  from_email: "",
  message: "",
};
const EMAIL_CONFIG = {
  serviceId: "service_ffmytdh",
  templateId: "template_ermavzt",
  userId: "FOxlBTfsiLIqM4zoC",
};

const GOOGLE_MAPS_API_KEY = "AIzaSyAN2ajE5BVblJHe7F6hZ4p__8DqMpiQBL4";

const MAP_CONFIG = {
  center: {
    lat: 23.7621513,
    lng: 90.4224733,
  },
  zoom: 13,
  style: {
    width: "100%",
    height: "465px",
  },
};

// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: 23.7621513,
//   lng: 90.4224733,
// };

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const strAbout = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"];

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [status, setStatus] = useState({ success: "", error: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [successMessage, setSuccessMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const handleEmailClick = () => {
    const email = "masummir773@gmail.com";
    const subject = "Contact Request";
    const body = "";

    // const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    //   subject
    // )}&body=${encodeURIComponent(body)}`;
    // window.open(gmailUrl, "_blank");
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ success: "", error: "" });

    try {
      const response = await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        formData,
        EMAIL_CONFIG.userId
      );

      if (response.status == 200) {
        console.log("response:: ", response);
        setStatus({
          success: "Thank you! Email sent successfully!",
          error: "",
        });
        setFormData(INITIAL_FORM_STATE);
      }
    } catch (e) {
      setStatus({
        success: "",
        error: "Failed to send email. Please try again or contact directly.",
      });
      console.error("Email send error:", e);
    } finally {
      setIsSubmitting(false);
    }

    // emailjs
    //   .send(
    //     "service_ffmytdh",
    //     "template_ermavzt",
    //     formData,
    //     "FOxlBTfsiLIqM4zoC"
    //   )
    //   .then(
    //     (response) => {
    //       console.log("data:: ", response, response.status, response.text);
    //       setSuccessMessage("Thank you! Email sent successfully!");
    //       setErrorMessage("");
    //       setFormData({ from_name: "", from_email: "", message: "" });
    //     },
    //     (error) => {
    //       setErrorMessage("Failed to send email. Please try again.");
    //       setSuccessMessage("");
    //     }
    //   );
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
        {status.success && (
          <p className="success-message" role="alert">
            {status.success}
          </p>
        )}
        {status.error && (
          <p className="error-message" role="alert">
            {status.error}
          </p>
        )}
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
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="from_email">Email</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Enter your email"
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
                disabled={isSubmitting}
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="button-handle">
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send "}
              </button>
              <button
                onClick={handleEmailClick}
                className="direct-email-button"
                aria-label="Send direct email"
              >
                Or email me directly
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="map-wrap" style={MAP_CONFIG.style}>
        <MapContainer
          center={MAP_CONFIG.center}
          zoom={MAP_CONFIG.zoom}
          scrollWheelZoom={false}
          style={MAP_CONFIG.style}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={MAP_CONFIG.center}>
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
