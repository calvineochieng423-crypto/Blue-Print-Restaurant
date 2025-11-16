// Footer.jsx
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Brand / About */}
                <div className="footer-about">
                    <picture>
                        <img src="./logo.png" alt="Logo" />
                    </picture>
                    <p>
                        Bringing you exquisite culinary experiences with fresh ingredients, handcrafted daily meals, and personalized hospitality.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: info@signatureeats.com</p>
                    <p>Phone: +254 700 123 456</p>
                    <p>Address: 123 Culinary Street, Nairobi, Kenya</p>
                </div>

                {/* Social Media */}
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Signature Eats. All rights reserved.</p>
            </div>
        </footer>
    );
}
