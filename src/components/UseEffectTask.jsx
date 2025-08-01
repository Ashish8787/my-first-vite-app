import { useEffect, useState } from "react";
import Count from "./Count";

function UseEffectTask() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        increment();
    },[]);
    const increment = () => {
        console.log("increment");
    }
    return (
        <div>
            <Count count={count} />
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            
        </div>
    )
}
export default UseEffectTask;