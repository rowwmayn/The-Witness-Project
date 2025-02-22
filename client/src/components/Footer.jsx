import React from "react";
import { FaPhone, FaWhatsapp, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: "20px 0",
  };

  const iconContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    alignItems: "center",
    fontSize: "24px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  return (
    <footer style={footerStyle}>
      <div>
        <h3>Contact Us</h3>
        <div style={iconContainerStyle}>
          <a href="tel:+123456789" style={linkStyle}><FaPhone /></a>
          <a href="https://wa.me/123456789" style={linkStyle}><FaWhatsapp /></a>
          <a href="#" style={linkStyle}><FaFacebook /></a>
          <a href="#" style={linkStyle}><FaYoutube /></a>
          <a href="#" style={linkStyle}><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;