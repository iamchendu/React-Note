// Scenario  

// Toggle Functionality 

import {useState} from 'react'

const Counter5 = () => {

    const[visible , setVisible] = useState(true);

// Example - 2 

    const toogle = () => {
        setVisible(!visible);
    }

// Example - 1

    // const Kogle = () => {
    //     setVisible(!visible)
    // }

  return (
    <div>
        <h1>Counter5 Componet </h1>

        {/* <h3>Example -  1 </h3>

        <button onClick={() => Kogle()}> Click </button>
        {
            visible ? <div style= {{border:'2px solid black' , width:'300px'  , padding:'10px', margin:'0 auto ',  height:'200px',color:'red' , fontWeight:'bold',backgroundColor:'#d1d1d1'}}>
                    <h2>It was My Show </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Dignissimos dolorem sint rem eaque laborum porro cumque nulla labore perspiciatis natus.
                    </p>
            </div> 
            : null
        } */}

        

        <br />

        <h3> Example - 2 , click to Hide and Click to Show </h3>

        <button onClick={() => toogle()}> {visible ? "Hide" : "Show"} </button>
        {
            visible ? <div style={{border:'2px solid black' , width:'300px'  , padding:'10px', margin:'0 auto ',  height:'200px',color:'red' , fontWeight:'bold',backgroundColor:'#d1d1d1'}}>
                    <h2>It was My Show </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Dignissimos dolorem sint rem eaque laborum porro cumque nulla labore perspiciatis natus.
                    </p>
            </div> 
            : null
        }
        
    </div>
    
  )
}

export default Counter5