import { useState } from "react";
function InputTask() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleName(e) {
        setName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePhone(e) {
        setPhone(e.target.value);
    }

    function handleClick() {
        setName("");
        setEmail("");
        setPhone("");
    }
    return(
        <div>
            <input type="text" value={name} onChange={handleName} placeholder="Enter your name" />
            <input type="text" value={email} onChange={handleEmail} placeholder="Enter your email" />
            <input type="text" value={phone} onChange={handlePhone} placeholder="Enter your phone" />
            <button onClick={handleClick}>Clear</button>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h1>Phone: {phone}</h1>
        </div>
    )
}
export default InputTask;