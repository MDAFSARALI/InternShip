import React from "react";

class Form extends React.Component{
    render(){
        return(
            <>
                <h1>Form Tag</h1> 
                <form>
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="Enter Your Name..."></input>
                    <br></br>
                    <label>Gender</label>
                    <input type="radio" name="gender" value={'Male'}></input>Male
                    <input type="radio" name="gender" value={'Female'}></input>Female
                    <input type="radio" name="gender" value={'Others'}></input>Others
                    <br></br>
                    <label>Religion</label>
                    <select name="religion">
                        <option disable selected value={''}>--Select Religion--</option>
                        <option value={'Hindu'}>Hindu</option>
                        <option value={'Islam'}>Islam</option>
                        <option value={'Others'}>Others</option>
                    </select>
                    <br></br>
                    <label>Message</label>
                    <textarea></textarea><br></br>
                    <label>Image</label>
                    <input type="file" name="image" accept=".jpg"></input><br></br>
                    <input type="submit" value={'Submit'} name="submit"></input>
                </form>
            </>
        )
    }
}

export default Form;