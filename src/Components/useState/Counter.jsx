import React from 'react'

const Counter = () => {

// Example 

    var mycount = 10 ;

    const increCount = () =>{                       // increment not work on display 
        mycount = mycount + 1 ;
        console.log(mycount);
        alert('Sorry It was not display on Browser');
    }

  return (
    <div>
        <h1>Counter one Component </h1>
        <h3>Hello Counter {mycount} </h3>
        <button  onClick={() => increCount()}>Increment</button>
    </div>
  )
}

export default Counter