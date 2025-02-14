function Plan({ title, price, features }) {
    return (
        <div className="plan-card">
            <h3 className="plan-title">{title}</h3>
            <ul className="features">
                {features.map((feature, index) => (
                    <li key={index}>✅ {feature}</li>
                ))}
            </ul>
            <p className="plan-price">{price}</p>
            <button className="button">Get Started</button>
        </div>
    );
}
function PricingPlans() {
    return (
        <div className="container">
            <div className="header">
                <h1>The Right Plan for <span style={{ color: "#9b84d9" }}>Your Business</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in iure vero. Facilis magnam, sed officiis commodi labore odit.</p>
            </div>
            <div className="plan-container">
                <Plan title="Starter" price="Free" features={["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"]} />
                <Plan title="Lorem Plus" price="$32.00" features={["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"]} />
                <Plan title="Lorem Pro" price="$50.00" features={["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"]} />
            </div>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(<PricingPlans />);