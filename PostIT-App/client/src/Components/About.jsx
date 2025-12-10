import React from "react";
import userImage from "../Images/user.png";


const About =()=>{
    return(
        <div>
            <h1> About this project</h1>
            <p>UTAS - IBRA</p>
            <p>Full Stack web Development</p>
            <img src={userImage} alt="devimg" className="userImage"/>
            <button>Contact Us</button>
        </div>
    );
};
export default About;