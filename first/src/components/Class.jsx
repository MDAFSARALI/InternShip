import React from "react";

/*React.component //It is already a class so it is a base class */

/*class A{//Base class,Parent class ,Root class


}
class B extends A{
}
*/
class First extends React.Component{
    //Because based on functional component so it converts the functional class 
    render(){
        return (
            <>
                <h1>Hello Class Components</h1>
                <p>This is paragraph tag</p>
                <span>This is span tag</span>
            </>
        )
}
}

export default First;