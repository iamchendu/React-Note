// State 

import { useState } from 'react'

import Counter from './Counter'
import Counter2 from './Counter2'
import Counter3 from './Counter3'
import Counter4 from './Counter4 '
import Counter5 from './Counter5'
import Counter6 from './Counter6'
import Counter7 from './Counter7'

const StateDemo = () => {

// Example  of  useState  

    // const a = useState(10);
    // console.log(a);                              //  It was create a array 
 

// Example  , whenever useState method use , it was 1st one variable created and 2nd one function created it was use 


    const [b , setCount] = useState(1)

    const info = () => {
        setCount(b + 1)                     //useState function  used here,  it was re-rendering here 
    }

// Example 

    const [age , addAge] = useState(10);
    const incre = () => {
      addAge(age+1);        // worked 
    }


// Example -  shortcut process

    const [day,newDay] = useState(1)
    const deside = () => newDay(day + 1 );


// Example - shortcut more easily process 

    const [sub,subJect] = useState("React JS");

    const [num,numBer] = useState(1);

    const [sum,somBer] = useState(1);


  return (

    <div>
        <h1> useState Demo </h1>

  {/* Example   */}

        <h3>Counting : {b} </h3>
        <button onClick={ () => info()}> Click </button>


  {/* Example   */}

        <h3> Counter : {age}  </h3>
        <button onClick={ incre }> Increment </button>
        <button onClick={() => addAge(age + 1)}> Increment Another </button>        {/* worked */}
      <h4>Both button will worked</h4>


    {/* Example -shortcut process  */}

        <h3> Start :  {day} </h3>
        <button onClick={deside}>Click</button>
  

    {/* Example - short cut more easily process */}

        <h3>Subject : {sub} </h3>
        <button onClick={() => subJect("JavaScript") }>Click</button>

        <h3> Number Increase : {num}  </h3>
        <button onClick={() => numBer(num + 1 )}> Click </button>

        <h3>Number Decrease : {sum} </h3>
        <button onClick={() => somBer(sum - 1 )}> Click </button>

<hr/>

    <Counter /> 

<hr />

    <Counter2 />


<hr /> 

    <Counter3 />

<hr />

    <Counter4 />
    
<hr /> 

    <Counter5 />

<hr />

    <Counter6 />

<hr />

    <Counter7 />

    
    </div>
  )
}

export default StateDemo