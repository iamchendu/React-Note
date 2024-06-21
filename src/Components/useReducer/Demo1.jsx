import React, { useReducer } from 'react'

// This method we can condition use other wise switch method also we can use 

const initialState = 10;

const counterAction = (a , b ) => {

// Example - 1 

    // if(b === "Start")
    // {
    //     return a = a + 1 ; 
    // }
    // else if(b === "Back")
    // {
    //     return a = a - 1 ;
    // }
    // else if(b === "reset"){
    //     return a = initialState;
    // }
    // else{
    //     return initialState
    // }


// Example - 2 

    switch(b)
    {
        case 'Start':
            return a = a + 1 ;

        case 'Back' :
            return a = a - 1 ;

        case "reset" :
            return initialState;

        default :
            return a;
    }

}

const Demo1 = () => {


    const [count , dispatch] = useReducer(counterAction,initialState)


  return (
    <div>
        <h1>Demo2 </h1>

        <h3>Counter : {count} </h3>
        <button onClick={() => dispatch("Start")}>Increment</button>
        <button onClick={() => dispatch("Back")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>

    </div>
  )
}

export default Demo1