import { useState , useEffect } from 'react';                                       //  Hook's  we can dirctly add 
// import { useEffect } from 'react';

const Effect1 = () => {


// Example 

    const [counter,setCounter] = useState(1)
    const [sub,setSubject] = useState("javaScript")

// Example 

    // useEffect(() => {
    //     console.log("Inside Hook ");
    // })

// Example 
    useEffect(() => {
        console.log("Inside Subject");
    },[sub])

//// 

    console.log("Inside Component "); 

  return (
    <div>
        <h1>Effect 1 component </h1>

        <h3> counter : {counter} </h3>
        <button onClick={() => setCounter(counter + 1 )}>Increment</button>

        <hr />

        <h3> subject : {sub} </h3>
        <button onClick={() => setSubject("React Jsx")}>Update</button>

    </div>
  )
}

export default Effect1