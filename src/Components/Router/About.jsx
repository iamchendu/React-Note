import React from 'react'

// import the useNavigate 

import { useNavigate } from 'react-router-dom'

const About = () => {

// Navigate the Page , this hook will be provide to another component 

  const nav = useNavigate()

    const gotoContact = () => {
        nav('/contact')                          // Go to the Contact component  
    }


  return (
    <div>

{/* While we no need's to create a navbar in every component , one component create a navbar and paste it in every component  */}

    <section>
      
      <h1>About Page </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quo.
      </p>
      
 {/* EXample , Navigate the Page with button  */}

    <button onClick={() => gotoContact()}>Go to Contact Page </button>

    </section>
    </div>
  )
}

export default About