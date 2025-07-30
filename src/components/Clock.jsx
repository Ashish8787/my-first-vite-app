import { useEffect, useState } from "react";

const Clock = ({color}) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h1>Clock</h1>
            <h1 style={{
                color: color,
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "black", 
                padding: "10px", 
                borderRadius: "10px",
                height: "50px", 
                width: "150px", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"
                }}>{time}</h1>
                
        </div>
    )
}
export default Clock;