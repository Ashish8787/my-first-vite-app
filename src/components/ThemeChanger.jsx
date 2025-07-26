import { useState } from "react";

function ThemeChanger() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div style={{ 
            backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white",
             padding: "20px", height: "100vh", width: "100vw" }}>
            <button onClick={toggleTheme}>{theme === "light" ? "Light" : "Dark"}</button>
            <p>This is a {theme} theme</p>
        </div>
    )
}

export default ThemeChanger;