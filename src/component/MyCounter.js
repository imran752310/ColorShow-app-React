import React from "react";


export  const MyCounter = ({value,redColor,greenColor,yellowColor,purpleColor,brownColor,BlueColor,orangeColor})=>{

    const styles={
        width:"500px",
        height:"200px",
        color:"white",
        backgroundColor:value,
        margin:"auto",
        marginTop:"20px",
        paddingTop:"100px",
        marginBottom:"80px",
        textAlign:"center",
        borderRadius:"20px"
    }


return(
    <>
   <div>
        <h1 style={styles}>The Color is  {value}</h1>
       <div className='dive'>
        <button  onClick={redColor}   className='btn-red'>Red</button>
        <button onClick={greenColor} className='btn-green'>Green</button>
        <button onClick={yellowColor}  className='btn-yellow'>Yellow</button>
        <button onClick={purpleColor} className='btn-purpul'>Purple</button>
      
        <button onClick={brownColor} className='btn-brown'>Brown</button>
        <button onClick={BlueColor}  className='btn-blue'>Blue</button>
        <button onClick={orangeColor} className='btn-orange'>Orange</button>
       </div>
    
        </div>
    </>
)

}


export default MyCounter;