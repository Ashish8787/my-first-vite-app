import { useState } from "react";

function Circle() {
    const [gender, setGender] = useState("male");
    const [city, setCity] = useState("select");
    const handleChange = (e) => {
        setGender(e.target.value);
    }
    const handleCityChange = (e) => {
        setCity(e.target.value);
    }
    return (
        <div>
            <h1>Selet Gander</h1>
            <input onChange={handleChange} type="radio" name="gender" value="male" checked={gender === "male"}/>
            <label htmlFor="male">Male</label>
            <input onChange={handleChange} type="radio" name="gender" value="female" checked={gender === "female"}/>
            <label htmlFor="female">Female</label>
            <input onChange={handleChange} type="radio" name="gender" value="other" checked={gender === "other"}/>
            <label htmlFor="other">Other</label>
            <div>Selected Gender: {gender}</div>


            <br />
            <br />
            <select onChange={handleCityChange} defaultValue="select">
                <option value="select">Select City</option>
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
                <option value="khulna">Khulna</option>
                <option value="rajshahi">Rajshahi</option>
                <option value="sylhet">Sylhet</option>
                <option value="barisal">Barisal</option>
                <option value="rangpur">Rangpur</option>
                <option value="mymensingh">Mymensingh</option>
            </select>
            <div>Selected City: {city}</div>
        </div>
    )
}
export default Circle;