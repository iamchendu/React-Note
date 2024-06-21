import React, { useContext } from 'react'
import { DataConText } from './ContextDemo'

const ComponentC = () => {

// Import the same Data Here ,Direct call the DataConText data

  // Process - 1 

    // const subjects = useContext(DataConText);


  // process - 2 

        const data = useContext(DataConText);


  return (
    <div>
        {/* DAta Transfer one component to another component  */}

        <h1>ComponentC</h1>

    {/* Process - 1  , call the only one value  */}

        {/* <h3>Subjects : {subjects.join(",")} </h3>
        <h3>Title: </h3> */}

    {/* Process - 2 , call the mulltiple value  */}

        <h3>Subjects : {data.subject.join(",")} </h3>
        <h3>Title: {data.title} </h3>

    </div>
  )
}

export default ComponentC