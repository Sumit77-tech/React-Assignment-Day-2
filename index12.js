function ToggleButton() {
    // State to track the button color
    const [color, setColor] = React.useState("blue");

    // Function to toggle the color
    const toggleColor = () => {
        setColor((prevColor) => (prevColor === "blue" ? "red" : "blue"));
    };

    return (
        <button 
            onClick={toggleColor} 
            style={{
                backgroundColor: color, 
                color: "white", 
                padding: "10px 20px", 
                border: "none", 
                cursor: "pointer", 
                fontSize: "16px"
            }}
        >
            Color: {color.charAt(0).toUpperCase() + color.slice(1)}
        </button>
    );
}

// Render the component
const root = ReactDOM.createRoot(document.getElementById("root")).render(<ToggleButton />);