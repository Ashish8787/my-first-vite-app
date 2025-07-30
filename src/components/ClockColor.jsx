import { useState } from "react";
import Clock from "./Clock";

function ClockColor() {
    const [color, setColor] = useState("white");
    return (
        <div>
            <select onChange={(e) => setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
                <option value="orange">Orange</option>
                <option value="pink">Pink</option>
                <option value="brown">Brown</option>
                <option value="gray">Gray</option>
                <option value="white">White</option>
            </select>

            <br />
            <Clock color={color} /> 
        </div>
    )
}
export default ClockColor;