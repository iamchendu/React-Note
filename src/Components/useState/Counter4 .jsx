// Scenario 

import { useState } from "react"

const Counter4  = () => {

  const[data,setData] = useState({counterOne : 10 , counterTwo : 20 });

  const increCountOne = () => {
    setData({
      ...data,                              // It was show the Previous Data 
      counterOne : data.counterOne + 1 
    })
  }
  const increCountTwo = () => {
      setData({
        ...data,
        counterTwo : data.counterTwo + 2
      })
  }

  return (
    <div>
      <h1>Counter 4 Component</h1>  

      <h3> Counting One : {data.counterOne} </h3>
      <button onClick={increCountOne}>Increment</button>
      <br/>
      <h3> Counter Two :{data.counterTwo} </h3>
      <button onClick={increCountTwo}>Increment</button>

    </div>
  )
}

export default Counter4 