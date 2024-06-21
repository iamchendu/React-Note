import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = (props) => {
  
  return (
    <div>
{/* DAta Transfer one component to another component  */}

        <h1>Component A</h1>

        <ComponentB />

    </div>
    
  )
}

export default ComponentA