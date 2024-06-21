import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {

  return (
    <div>
      {/* DAta Transfer one component to another component  */}

        <h1>Component B</h1>

          <ComponentC />
    </div>
  )
}

export default ComponentB