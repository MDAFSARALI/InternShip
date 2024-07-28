import React from "react";
import Swal from "sweetalert2";

const handleClick=()=>{
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    if (hour==19 && minute==55) {
        Swal.fire({
            title: "Good job!",
            text: "You are welcome on Work!",
            icon: "success"
          });
          new Audio("img/Ontime.mp3").play();    
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You are late on work!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          new Audio("img/Notontime.mp3").play();   

    }
}
const gatePass=()=>{
    return(
        <>
        <div class="card">
            <img class="card-img-top" src="./img/Aman.jpg" alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title">Name: Md Afsar</h5>
                <p class="card-text">Profession:<br></br> Web Dev Intern</p>
            <img class="card-img-top" src="./img/qr.png" alt="Card image cap"></img>
                <a href="#" class="btn btn-primary" onClick={handleClick}>Scan Me</a>
            </div>
        </div>
        </>
    )
}

export default gatePass;