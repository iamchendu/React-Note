import React from 'react'
import './Style.css';
import Users from '../Looping Inside Component/Users';
const StyleDemo = () => {

  let inValid = true;

  return (

    // External Style using 

// How to create a css file and Add to the jsx folder 

    <div className='Container'>
        
        <h1>StyleDemo Design with CSS </h1>

{/* Another Component Design  */}

        <Users />

        

    {/* Inline style using  , {{css style }} */}

        <h1 style={{color:'red',fontSize:'50px', backgroundColor:'white' , textAlign:'center'}}>Hell0 Bro</h1>


    {/*  Example - Conditionally we are Adding Class , and External  css Design */}

      {/*  true - Suppose value is true , true css design aplied */}
      {/*  false - Suppose value is false , false css design aplied */}


        <h1 className={(inValid === false) ? "success" : "danger"}>Hello World , It was nice day</h1>


    {/*  Example - Conditionally we are Adding css , Inline style  Design */}

        <h1 style={(inValid === false) ? {color:'red', backgroundColor:'#d1d1d1', padding:'20px'} : {color:'white' , padding:'20px', backgroundColor :'black'}}> Good morning </h1>
        

        <br />
    </div>
  )
}

export default StyleDemo
