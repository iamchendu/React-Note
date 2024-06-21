import React, { useReducer } from 'react';

    const initialState = {
        counterOne : 1  ,
        counterTwo : 10 , 
        sub : "React JSx"
    }

    const counterAction = (a , b ) => {

        switch(b.type) 
        {
        
        // 
        
            case "incre":
                return{
                    ...a,                                                       // Existing value here 
                    counterOne : a.counterOne + 1                           // increment value 
                }

            case "decre": 
                return{
                    ...a,
                    counterOne : a.counterOne - 1                               // decrement value 
                }

            case "reset" :
                return initialState;
            
        // 
            case "increTwo":
                return{
                    ...a,                                                   // Existing value here
                    counterTwo : a.counterTwo + 2
                }

            case "decreTwo":
                return{
                    ...a,
                    counterTwo : a.counterTwo - 2
                }

            case "change" :
                return{
                    ...a,
                    sub : " Angular"                                            // change the subject 
                }
            default :
                return a;
        }
    }


const ReduceDemoObject = () => {

    const[count ,dispatch] = useReducer(counterAction , initialState )

  return (
    <div>
        <h1>ReduceDemoObject </h1>

        <h3> Number Count one : {count.counterOne} </h3>

        <button onClick={() => dispatch({type:"incre"})}>Increment</button>                                 {/*  we can write like this , type it was working same  */}
        <button onClick={() => dispatch("decre")}>Decrement</button>
{/*  */}
    <hr /> 

        <h3> Number Counte Two : {count.counterTwo} </h3>

        <button onClick={() => dispatch({type:"increTwo"})}>Increment</button>
        <button onClick={() => dispatch("decreTwo")}>Decrement</button>
    
    <hr />

        <h3>Subject : {count.sub} </h3>
        <button onClick={() => dispatch("change")}>Update</button>


    <br/> <br /> 

        <button onClick={() => dispatch({type:"reset"})}>Reset</button>

    </div>
  )
}

export default ReduceDemoObject