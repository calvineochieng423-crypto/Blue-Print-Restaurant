import "./Herosection.css";
import backgroundImage from "../assets/background.jpg"; // adjust path

export default function Herosection() {
    return (
        <main className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-overlay"></div>
            <div className="intro">
                <h1>Experience Exceptional Flavors Crafted With Passion</h1>
                <p>
                    We blend fresh, locally sourced ingredients with innovative culinary 
                    techniques to bring you meals that delight the senses.
                </p>
                <div className="hero-buttons">
                    <button className="primary-btn">View Menu</button>
                    <button className="secondary-btn">Reserve a Table</button>
                </div>
            </div>
        </main>
    );
}
