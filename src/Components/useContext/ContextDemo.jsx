import React from 'react'

import ComponentA from './ComponentA'

// Example -2  , How to provide to this data to another component 

  export const DataConText = React.createContext();


const ContextDemo = () => {

    const sub = ["Html", "Css" , "java" , "BootStrap"]
    const title = "React JS"

  return (
    <div>

{/* DAta Transfer one component to another component  */}




{/* Example - 1 , call with props , one component to another component  */}

        {/* <ComponentA subject={sub} title={title} /> */}




{/* Example - 2  , create the dataContext and provider , it was transfer data  */} 

 {/* Process - 1 ,  We call the one value */}

    {/* <DataConText.Provider value={subject}>
            <div>

              <ComponentA />

            </div>
    </DataConText.Provider> */}



{/* Process - 2 ,  multple value calling it was need's the object */}

    <DataConText.Provider value={{subject:sub , title:title}}>
            <div>

              <ComponentA />

            </div>
    </DataConText.Provider>

    </div>
  )
}

export default ContextDemo