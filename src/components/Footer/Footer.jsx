import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-logo-text">
          <img src="logo.png" alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Take the first step towards a healthier, stronger you with our
            unbeatable pricing plans. Let's sweat, achieve and conquer together!
          </p>
        </div>

        <div className="footer-icons">
          <FaFacebookF className="footer-icon" />
          <FaInstagram className="footer-icon" />
          <FaXTwitter className="footer-icon" />
        </div>
      </div>

      <div className="footer-sections">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>Business</li>
            <li>Franchise</li>
            <li>Partnership</li>
            <li>Network</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>Blogs</li>
            <li>Security</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>BMI Calculator</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
