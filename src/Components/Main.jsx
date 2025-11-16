import "./Main.css";

export default function Main() {
    return (
        <section className="feature-section">

            <div className="intro-feature">
                <h2>Why Diners Love Our Signature Experience</h2>
            </div>

            <div className="svg-wrapper">

                {/* Feature 1 */}
                <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill="none" stroke="#F57C00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 4c-4 1-8 5-10 10-3 1-6 1-8-1 3 3 7 4 11 3 5-1 8-6 7-12z"/>
                            <path d="M7.5 9.5c2.2-2.2 6-3.2 9-3"/>
                            <path d="M12 12s-1.5-1.5-3-2.5"/>
                        </g>
                    </svg>
                    <p>Farm-fresh ingredients daily.</p>
                </div>

                {/* Feature 2 */}
                <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill="none" stroke="#F57C00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 10c0-2.2 1.8-4 4-4 1.6 0 2.9 1 3.5 2.4C17.3 9 18 10 19 10c1.1 0 2 .9 2 2 0 2.5-1.5 4.5-4 5H7c-2.5-.5-4-2.5-4-5 0-1.1.9-2 2-2 .9 0 1.6-1 2.5-1.6C7.1 7 7.9 6 9 6c.4 0 .8.1 1.2.3"/>
                            <path d="M7 15v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2"/>
                        </g>
                    </svg>
                    <p>Expert chefs craft daily.</p>
                </div>

                {/* Feature 3 */}
                <div className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g fill="none" stroke="#F57C00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20v-6.5c0-1-.8-1.8-1.8-1.8H6.5a1.5 1.5 0 0 1-1.3-.8l-.8-1.6A3 3 0 0 1 7 6h1.2c.6 0 1.2-.3 1.6-.8.8-.9 2.4-.9 3.2 0 .4.5 1 .8 1.6.8H17a3 3 0 0 1 2.3 1.2l.2.3"/>
                            <path d="M8.5 11c1-1 2.7-1.2 3.8-.1 1.1-1.1 2.8-1 3.9.1 1.1 1.1 1.1 2.9 0 4-1.1 1.1-3 2.6-6 5.1-3-2.5-4.9-4-6-5.1-1.1-1.1-1.1-2.9 0-4z"/>
                        </g>
                    </svg>
                    <p>Warm, personalized service.</p>
                </div>

            </div>

            <div className="feature-wrapper">
             <div className="dishes">
                <div className="dish-images">

                    <div className="image-wrapper">
                        <img src="./image.jpg" alt="Garlic Shrimp" />
                        <h3>Garlic Butter Shrimp</h3>
                        <p>Freshly cooked every day</p>
                    </div>

                    <div className="image-wrapper">
                        <img src="./image1.jpg" alt="Grilled Salmon" />
                        <h3>Lemon Herb Salmon</h3>
                        <p>Served with seasonal vegetables</p>
                    </div>

                </div>
            </div>
            <div className="Menu-wrapper">
    <h2>Menu Preview</h2>

    <div className="menu-item">
        <h3>Spicy Tuna Roll</h3>
        <p>Fresh tuna with a hint of spice</p>
        <span className="price">$12</span>
    </div>

    <div className="menu-item">
        <h3>Classic Margherita Pizza</h3>
        <p>Tomato, basil, mozzarella</p>
        <span className="price">$15</span>
    </div>

    <div className="menu-item">
        <h3>Garlic Butter Shrimp</h3>
        <p>Freshly cooked every day</p>
        <span className="price">$25</span>
    </div>
</div>

          </div>
        </section>
    );
}
