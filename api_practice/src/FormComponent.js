import React from "react"

function FormComponent(props) {
            return (
                <main>
                    <form>
                        <input placeholder="First Name" 
                            type="text" 
                            value={props.data.firstName} 
                            name="firstName" 
                            placeholder="First Name" 
                            onChange={props.handleChange} 
                        />
                        <br />
                        <input placeholder="Last Name" 
                            type="text" 
                            value={props.data.lastName} 
                            name="lastName" 
                            placeholder="Last Name" 
                            onChange={props.handleChange} 
                        />
                        <br />
                        <input placeholder="Age" 
                            type="text" 
                            value={props.data.age} 
                            name="age" 
                            placeholder="Age" 
                            onChange={props.handleChange} 
                        />
                        <br />
                        <label>
                            <input 
                                type="radio" 
                                name="gender"
                                value="Male"
                                checked={props.data.gender === "Male"}
                                onChange={props.handleChange}
                            /> Male
                            <input 
                                type="radio" 
                                name="gender"
                                value="Female"
                                checked={props.data.gender === "Female"}
                                onChange={props.handleChange}
                            /> Female
                        </label>
                        <br />
                        <label>Destination:</label>
                        <select 
                            value={props.data.location}
                            onChange={props.handleChange}
                            name="location"
                        >
                            <option>--Choose Destination--</option>
                            <option value="India">India</option>
                            <option value="UK">UK</option>
                            <option value="Japan">Japan</option>
                            <option value="Paris">Paris</option>
                            <option value="Sweden">Sweden</option>
                        </select>
                        <br />
                        <label>
                            <input 
                                type="checkbox" 
                                name="isVegan"
                                checked={props.data.isVegan}
                                onChange={props.handleChange}
                            /> Vegetarian/Vegan
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="isLactIntol"
                                checked={props.data.isLactIntol}
                                onChange={props.handleChange}
                            /> Lactose Intolerant
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="isHalal"
                                checked={props.data.isHalal}
                                onChange={props.handleChange}
                            /> Halal
                        </label>
                        <br />
                        <button>Submit</button>
                    </form>
                    <hr />
                    <h2>Entered information:</h2>
                    <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                    <p>Your age: {props.data.age}</p>
                    <p>Your gender: {props.data.gender}</p>
                    <p>Your destination: {props.data.location}</p>
                    <p>Your dietary restrictions:</p> 
                    <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
                    <p>Lactose Intolereant: {props.data.isLactIntol ? "Yes": "No"}</p>
                    <p>Halal: {props.data.isHalal ? "Yes": "No"}</p>

                </main>
            )
        }

export default FormComponent