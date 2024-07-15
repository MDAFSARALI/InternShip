import React from "react";

const img='img/img.jpg'
class Resume extends React.Component{
    render(){
        return(
            <>
                <h1>Know About Myself...</h1>
                <img src={img} height={400} style={{borderRadius: "30px"}}></img>
                <h3>Personal Details</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h3>Educational Qualification</h3>
                <hr></hr>
                <ul>
                    <li>(I-IV): Muslim UP School</li>
                    <li>(V-X): Kamarhati High School</li>
                    <li>(XI-XII): Alambazar Urdu High School</li>
                    <li>(Graduation):Aliah University</li>
                </ul>
                <h3>Family Details</h3>
                <ol>
                    <li>Father's Name: Md Kausar Alam</li>
                    <li>Mother's Name :Jubeda Khatoon</li>
                    <li>Elder Brother :Md Faishal</li>
                    <li>Younger Brother: Md Afzal</li>
                </ol>
                <h3>Details</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </>
        )
    }
}

export default Resume;