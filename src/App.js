import React,{useState} from 'react';
import './App.css';
import {MyCounter}from './component/MyCounter';

function App() {
   const [color, setColor]=useState("Black");

   const redColor=() => {
       setColor(("Red"))
   };
   const greenColor=() => {
    setColor("Green")
    };
    const purpleColor=() => {
    setColor("Purple")
    };
    const yellowColor=() => {
        setColor(("yellow"))
    };
    const brownColor=() => {
        setColor(("Brown"))
    };
    const BlueColor=() => {
     setColor("blue")
     };
     const orangeColor=() => {
     setColor("Orange")
     };
   

    return ( 
        <div>
          <MyCounter 
          redColor={redColor}  
          greenColor={greenColor} 
          yellowColor={yellowColor} 
          purpleColor={purpleColor} 
          brownColor={brownColor} 
          BlueColor={BlueColor} 
          orangeColor={orangeColor} 
          value={color}/>
        
        </div>
    );
}

export default App;