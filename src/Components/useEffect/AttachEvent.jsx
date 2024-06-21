import {useEffect} from 'react'

const AttachEvent = () => {

// Example , created a function

    useEffect(() => {

        var x = document.getElementById("btn");
        x.addEventListener("click",some)                                // called a function 

    },[]);


//  Example 

    const some = () => {
        alert("City Light's ")
    }


  return (
    <div>

        <h1>AttachEvent Component </h1>

        <button id='btn'>Click</button>

    </div>
  )
}

export default AttachEvent