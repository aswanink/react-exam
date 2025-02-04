
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - About */}
        <div className="footer-section">
          <h2 className="footer-logo">Fudo</h2>
          <p>Our job is to filling tummy with delicious food and fastest and free delivery</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">Why Fudo?</a></li>
            <li><a href="#">Partner with us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
       
        </div>

          {/* Column 5 - Contact */}
          <div className="footer-section">
          <h3>Get in Touch</h3>
          <ul>
            <li><a href="#">Questions or feedback?</a></li>
            <li><a href="#">We had love to hear from you</a></li>
            <li><a href="#">Email address</a></li>
           
          </ul>
       
        </div>

      </div>

      
    </footer>
  );
};

export default Footer;
