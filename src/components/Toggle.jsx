import { useState } from "react";
function Toggle() {
    const [display, setDisplay] = useState(false);
    function toggleDisplay() {
        setDisplay(!display);
    }
    return(
        <div>
            <h1>Toggle</h1>
            <button onClick={toggleDisplay}>{display ? "Hide" : "Show"}</button>
            {display && <h1>Hello World</h1>}
        </div>
    )
}
export default Toggle;