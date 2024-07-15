import React from "react";

class Sform extends React.Component{
    render(){
        return(
            <>
                <h1>Personal Details :</h1> 
                <form>
                   <label>Name : </label>
                   <input type="text" name="name" placeholder="Enter your name : "></input><br></br>
                   <label>Father's Name : </label>
                   <input type="text" name="father's name" placeholder="Enter your father's name : "></input><br></br>
                   <label>Mothers's Name : </label>
                   <input type="text" name="mother's name" placeholder="Enter your mother's name : "></input><br></br>
                   <label>D-O-B : </label>
                   <input type="date" name="dob" placeholder="Enter your name : "></input><br></br>
                   <label>Mobile No : </label>
                   <input type="number" name="mobile" placeholder="Enter your mobile no : "></input><br></br>
                   <label>Email : </label>
                   <input type="email" name="name" placeholder="Enter your email : " ></input><br></br>
                   <label>Image</label>
                   <input type="file" name="image" accept=".jpg"></input><br></br>
                   <h2>Address Details : </h2>
                   <label>Address : </label>
                   <input type="text" name="address" placeholder="Enter your address name : "></input><br></br>
                   <label>Village : </label>
                   <input type="text" name="village" placeholder="Enter your village name : "></input><br></br>
                   <label>Post Office : </label>
                   <input type="text" name="postoffice" placeholder="Enter your post office name : "></input><br></br>
                   <label>State</label>
                    <select name="state">
                        <option disable selected value={''}>--Select state--</option>
                        <option value={'Sikkim'}>sikkim</option>
                        <option value={'assam'}>Assam</option>
                        <option value={'wb'}>West Bengal</option>
                        <option value={'others'}>others</option>
                    </select>
                    <br></br>
                    <label>Pincode No : </label>
                   <input type="number" name="pincode" placeholder="Enter your pincode no : "></input><br></br>
                   <label>DOA : </label>
                   <input type="number" name="mobile" placeholder="Enter your date of admission : "></input><br></br>
                   <label>Class</label>
                    <select name="class">
                        <option disable selected value={''}>--Select class--</option>
                        <option value={'V'}>V</option>
                        <option value={'X'}>X</option>
                        <option value={'XII'}>XII</option>
                    </select>
                    <br></br>
                    <label>Section</label>
                    <input type="radio" name="section" value={'A'}></input>A
                    <input type="radio" name="section" value={'B'}></input>B
                    <input type="radio" name="section" value={'C'}></input>C
                    <br></br>
                    <label>CLC : </label>
                    <input type="text" name="CLC" placeholder="Enter your CLC name : "></input><br></br>
                    <input type="submit" value={'Submit'} name="submit"></input>
                </form>
            </>
        )
    }
}

export default Sform;