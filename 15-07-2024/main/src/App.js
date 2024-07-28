import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Menu from './Menu';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import Admission from './components/Admission';
// import Registration from './components/Registration';
// import Contact from './components/Contact';
import Billing from './components/Billing';




// let a=20;
// let b=30;
// let sum=a+b;

// let n = 11;
// let print = ""
// let cssStyle = {}

// if (n === 10) {
//   print = "Number Is Equal To 10"
//   cssStyle.color = "red"
// }
// else{
//   print = "Number Is Not Equal To 10"
//   cssStyle.color = "green"
// }

//Q1)Take a number then check if the number is odd or even
//Q2)Take day then check if day is sunday the print today is holiday so i will going to watch movie print with image , if day is not sunday the print today is office with image

// let number=11;
// let print =""
// let cssStyle={}
// if (number%2==0) {
//   print ="Number is Evan";
//   cssStyle.color="red"
// }
// else{
//     print ="Number is Odd";
//     cssStyle.color="green"
// }


// Question Two
// let day="monday";
// let comment=""
// let img=""
// if (day==="Sunday") {
//   comment="Today is Sunday it's means Holiday"
//   img="./holiday.jpeg"
// }
// else{
//   comment="Today is Office Day Going to office"
//   img="./office.webp"
// }


// Question:03
/* Take a number then check if.
Number is 1 then print add.
,, ,, 2 print subtraction
,, ,, 3 print multiplication.
,, ,, 4 division
,, ,, 5 take any number then check if the number is positive or negative.
,, ,, 6 then print wrong input.
*/

let numb=5;
// let print="";
// let cssStyle={}
// let a=10;
// let b=5;
// if (numb==1) {
//   print=`The addition of ${a} and ${b} is ${a+b}`
//   cssStyle.color="red";
// }
// else if (numb==2) {
//   print=`The subtraction of ${a} and ${b} is ${a-b}`
//   cssStyle.color="green";
// }
// else if (numb==3) {
//   print=`The multiplication of ${a} and ${b} is ${a*b}`
//   cssStyle.color="blue";
// }
// else if (numb==4) {
//   print=`The Division of ${a} and ${b} is ${a/b}`
//   cssStyle.color="pink";
// }
// else if (numb==5) {
//   let newNum=-20;
//   if(newNum>0){
//     print=`The ${newNum} is positive`
//     cssStyle.color="skyblue";
//   }
//   else{
//     print=`The ${newNum} is Negative`
//     cssStyle.color="skyblue";
//   }
// }
// else{
//    print=`Wrong Input`;
//    cssStyle.color="purple"
// }


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Menu/>}></Route>
              <Route exact path='/About' element={<About/>}></Route>
              <Route exact path='/Gallery' element={<Gallery/>}></Route>
              <Route exact path='/Admission' element={<Admission/>}></Route>
              <Route exact path='/Registration' element={<Registration/>}></Route>
              <Route exact path='/Contact' element={<Contact/>}></Route>
          </Routes>
      </BrowserRouter> */}
      {/* <h1>{`The Sum is ${sum}`}</h1> */}
      {/* <h1 style={cssStyle}>{print}</h1> */}



        {/* Question:01 */}
        {/* <h1 style={cssStyle}>{print}</h1> */}
        {/* Question 02 */}
        {/* <h1>{comment}</h1>
        <img src={img} alt="Image" /> */}

        {/* Question No : 03 */}
        {/* <h1 style={cssStyle}>{print}</h1> */}
          <Billing/>





    </div>
  );
}

export default App;
