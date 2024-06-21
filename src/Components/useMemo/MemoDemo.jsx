import React, { useMemo, useState } from 'react'

const Memo1 = () => {

    const[counterone,setCounterOne] =  useState(100)
    const[counterTwo,setCounterTwo] =  useState(10)

    const increOne = () => {
        setCounterOne(counterone + 1 )
    }

    const increTwo = () => {
        setCounterTwo(counterTwo + 2 )
    }

// Example , show the odd and even number 

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 6000000000)
            i++
        return counterone % 2 === 0;
    } , [counterone])


  return (
    <div>
        <h3>Counter One - {counterone} - { isEven ? "Even" : "Odd" } </h3>
        <button onClick={ () => increOne()}> Increment One </button>

        <h3>Counter Two - {counterTwo} </h3>
        <button onClick={ () => increTwo()}> Increment Two </button>
    </div>
  )
}

export default Memo1