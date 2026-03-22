import React from "react";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3 className="footer-logo">
            <GraduationCap /> Learnify
          </h3>
          <p>
            Connecting students with quality education and learning resources
            around the world.
          </p>

          <div className="social-links">
            <a href="#!" aria-label="Facebook"><FaFacebook id="facebook" size={24} /></a>
            <a href="#!" aria-label="YouTube"><FaYoutube id="youtube" size={24} /></a>
            <a href="#!" aria-label="Instagram"><FaInstagram id="instagram" size={24} /></a>
            <a href="#!" aria-label="LinkedIn"><FaLinkedin id="linkedin" size={24} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#!">Help Center</a></li>
            <li><a href="#!">Privacy Policy</a></li>
            <li><a href="#!">Terms of Service</a></li>
            <li><a href="#!">FAQs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <div className="contact-info">
            <span><Mail size={18} />support@Learnify.com</span>
            <span><Phone size={18} />+212 6 99 99 99 99</span>
            <span> <MapPin size={18} />Tanger, Morocco</span>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {currentYear} Learnify. All rights reserved.</p>
        <p>Developed by <a href="#" target="_blank" rel="noopener noreferrer">OUSSAMA SALTANI</a></p>
      </div>
    </div>
  );
}

export default Footer;