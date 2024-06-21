import React from 'react'
import { useNavigate } from 'react-router-dom'
const Register = () => {

  const nav = useNavigate();


  return (
    <div>

{/* While we no need's to create a navbar in every component , one component create a navbar and paste it in every component  */}


    <section>
      <h1>Register Page </h1>
    </section>

{/* Navigate with Self Doing , only call the useNavigate , and only working for page component  (Next , BAck) */}

    <button onClick={() => {nav(-1)} }>Back</button>
    
    </div>
  )
}

export default Register