function Card({ title, children }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            margin: "10px",
            backgroundColor: "white",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
        }}>
            <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>{title}</h3>
            <p style={{ margin: 0 }}>{children}</p>
        </div>
    );
}
function App() {
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Reusable Card Component</h2>
            <Card title="Card 1">
                Sir ke saath Chai Piyenge!!
            </Card>
            <Card title="Card 2">
                Sir ke saath Chai Nahi Piyenge, Coffee Piyenge!!
            </Card>
            <Card title="Card 3">
                Hum Akele hi Chai Aur Coffee Pi Jayenge!!
            </Card>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(<App />);