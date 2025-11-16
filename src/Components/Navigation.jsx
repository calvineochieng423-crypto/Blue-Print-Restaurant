import { useState } from "react";
import "./Navigation.css";

export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="nav-section">

            <picture>
                <img src="./logo.png" alt="blue print logo" />
            </picture>

            {/* HAMBURGER BUTTON */}
            <div className="hamburger" onClick={() => setShowMenu(true)}>
                ☰
            </div>

            {/* DESKTOP MENU */}
            <div className="middle-links">
                <a href="#Home">Home</a>
                <a href="#About Us">About Us</a>
                <a href="#Menu">Menu</a>
                <a href="#Reservations">Reservations</a>
                <a href="#Gallery">Gallery</a>
            </div>

            <div className="left-links">
                <a href="#Special's">Special's</a>
                <a href="#Events">Events</a>
                <a href="#Contact">Contact</a>
            </div>

            {/* MOBILE MENU */}
            <nav className={`nav-mobile ${showMenu ? "open" : ""}`}>
                <div className="cancel-btn" onClick={() => setShowMenu(false)}>✖</div>

                <a href="#Home">Home</a>
                <a href="#About Us">About Us</a>
                <a href="#Menu">Menu</a>
                <a href="#Reservations">Reservations</a>
                <a href="#Gallery">Gallery</a>

                <a href="#Special's">Special's</a>
                <a href="#Events">Events</a>

                <a href="#Contact" className="contact-btn">Contact</a>
            </nav>

        </header>
    );
}
