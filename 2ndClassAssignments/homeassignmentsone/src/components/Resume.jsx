import React from "react";
const img="img/afsar.jpg"
const Resume =()=>{
    return (
        <>
                <h1>Resume</h1>
                <img src={img} alt="Afsar image" style={{height:"600px", borderRadius:"20px" , float:"left" ,marginLeft:"20px"}}></img>
                <h1>Personal Details</h1>
                <ul style={{ listStyleType: "none"}}>
                    <li style={{marginBottom:"20px"}}>Name : <span style={{fontWeight:"700", color:"red"}}>Md Afsar</span></li>
                    <li style={{marginBottom:"20px"}}>College Name: Aliah University</li>
                    <li style={{marginBottom:"20px"}}>Stream : Computer Science And Engineering</li>
                    <li style={{marginBottom:"20px"}}>Year-Of-Passing : 2025</li>
                </ul>
                <h1>Educational Qualification</h1>
                <ul style={{ listStyleType: "none"}}>
                    <li style={{marginBottom:"20px"}}>School : Completed Hs from Alambazar Urdu High School</li>
                    <li style={{marginBottom:"20px"}}>College Name: Aliah University</li>
                    <li style={{marginBottom:"20px"}}>Stream : Computer Science And Engineering</li>
                    <li style={{marginBottom:"20px"}}>Year-Of-Passing : 2025</li>
                </ul>
                <h1>Family Details</h1>
                <p>My parents are both hard-working and dedicated to their family. My father is a doctor, and my mother is a teacher. They have always instilled in me the importance of education, hard work, and perseverance. I am grateful for their love and support, and I know that I can always count on them.</p>
                
        </>
    )
}
export default Resume;