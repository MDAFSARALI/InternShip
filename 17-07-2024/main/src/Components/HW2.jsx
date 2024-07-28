import React, { useState } from "react";
import Food from './Food'


const FoodItem = () =>{


    const [data] = useState(Food)


    return(
        <>
            <h1 style={{textAlign:"center", fontSize:"20px"}}>Food Menu Item</h1>
            <div className="type " style={{display:"flex", flexWrap:true, justifyContent:"center", margin:"10px",gap:"2vw",}}>
                <p className="">All Food</p>
                <p>Fast Food</p>
                <p>Veg</p>
                <p>Non Veg</p>
                <p>Break Fast</p>
                <p>Lunch</p>
                <p>Dinner</p>
                <p>Tea</p>
                <p>Coffee</p>
            </div>
            {
                data.map((elem) =>{
                    {/* const {img1,name1,type1} = elem */}
                    const {img1,name1,type1}=elem;
                    const {img2,name2,type2}=elem;
                    const {img3,name3,type3}=elem;
                    const {img4,name4,type4}=elem;
                   
                    return(
                        <div className="mainContainer" style={{justifyContent:"center",alignItems:"center" ,margin:"auto",display:"flex" , flexDirection:"row"}}>
                            <div className="items" style={{backgroundColor:"red", display:"flex", width:"300px" ,justifyContent:"space-between"}}>
                            <img src={img1} alt="Image1" />
                                <div className="contents">
                                    <p>{name1}</p> 
                                </div>
                            </div>
                            {/* <div className="items">
                            <img src={img2} alt="" />
                            </div>
                            <div className="items"></div>
                            <div className="items"></div> */}
                        </div>
                        
                    )
                })
            }
        </>
    )
}


export default FoodItem
