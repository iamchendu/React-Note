import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '../Redux/CounterSlice';
const About = () => {

//sAccessing the state data ,  CounterSlice component data will stored here 

  const data = useSelector((state) => state)

// Dispatch the action you defiend in slice to the  store ( Call that component )

  const x = useDispatch() ;
  
  return (
    <div>
      <h1>About - {data.counter} </h1>
    
{/* Call that function , data dispatching here */}

      <button onClick={ () => x(incrementCounter())}>Increment</button>
      <button onClick={ () => x(decrementCounter())}>Decrement</button>
    </div>
  )
}

export default About