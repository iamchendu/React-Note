import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {


// Navigate the Page , this hook will be provide to another component 

  const x = useNavigate()

    const gotoRegister = () => {
        x('/register')                          // Go to the Contact component  
    }

  return (
    <div>
      
{/* While we no need's to create a navbar in every component , one component create a navbar and paste it in every component  */}
 

    <section>
      <h1>Contact Page </h1>
      <p>
        2038290292
      </p>

 {/* EXample , Navigate the Page with button  */}

    <button onClick={() => gotoRegister()}> Go to Register Page </button>


{/* This functionallity  Navigate with Self Doing , only call the useNavigate , and only working for page component (Next , BAck) */}

    <button onClick={() => {x(+1)} }>Next</button>

    </section>

    </div>
  )
}

export default Contact