import { useState } from "react";
function Greet() {
    const [name, setName] = useState("John");
    return(
       
        <div>
            <h1>Hello {name}</h1>
            <button onClick={() => setName("Ashish")}>Click me to see the name</button>
        </div>
    )
}
export default Greet;