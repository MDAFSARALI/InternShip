import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/action';


function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();


  return (
    <div className="App">
          <div className="counter-container">
                <input
                    type="text"
                    className="counter-input"
                    value={count}
                    readOnly
                   style={{height:"50px", width:"100px" ,textAlign:"center", fontSize:"40px", marginTop:"5vh"}}
                />
                <div className="buttons-container" style={{marginTop:"5vh"}}>
                    <button className="counter-button increment" onClick={() => dispatch(increment())} style={{height:"25px", width:"100px", color:"white", backgroundColor:"green"}}>Increment</button>
                    <button className="counter-button decrement" onClick={() => dispatch(decrement())} style={{height:"25px", width:"100px", color:"white", backgroundColor:"red"}}>Decrement</button>
                </div>
            </div>
    </div>
  );
}


export default App;
