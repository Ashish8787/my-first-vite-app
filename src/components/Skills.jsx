import { useState } from "react";

function Skills() {
    const [skills, setSkills] = useState([]);
    const handleChange = (e) => {
        if(e.target.checked){
            setSkills([...skills, e.target.value]);
        }else{
            setSkills(...skills.filter(skill => skill !== e.target.value));
        }
    }
    return (
        <div>
            <h1>Skills</h1>
            <input id="php" onChange={handleChange} type="checkbox" value="php" />
            <label htmlFor="php">PHP</label>
            <br />
            <input id="java" onChange={handleChange} type="checkbox" value="java" />
            <label htmlFor="java">JAVA</label>
            <br />
            <input id="js" onChange={handleChange} type="checkbox" value="js"/>
            <label htmlFor="js">JS</label>
            <br />
            <input id="react" onChange={handleChange} type="checkbox" value="react" />
            <label htmlFor="react">REACT</label>

            <div>{skills}</div>
            <button onClick={() => setSkills([])}>Clear</button>
        </div>
    )
}
export default Skills;