import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button style={{marginRight: "10px"}} onClick={() => setCount(count + 1)}>Increment</button>
            <button style={{marginRight: "10px"}} onClick={() => setCount(count - 1)}>Decrement</button>
            <button style={{marginRight: "10px"}} onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;

