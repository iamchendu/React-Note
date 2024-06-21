import React, {useRef, useEffect, useState } from 'react'

const ClockDemo = () => {
    const [timer , setTimer] = useState(new Date().toLocaleTimeString())
    const timerRef = useRef();


// process - 1 


     useEffect(() => {                                           // whenever i click the button it was calling the un-necessary data runed in background
      timerRef.current = setInterval(() => {
        console.log("clock Calling");
        setTimer(new Date().toLocaleTimeString())
      }, 1000);

      return () => {
        clearInterval(timerRef.current)                           // i stop the button it was stoped and un-necessary data stoped in background
      }                                                         // .current it was stoped the current data 

    },[])



// process  - 2 


    // useEffect(() => {                                           // whenever i click the button it was calling the un-necessary data runed in background
    //   let timerRef = setInterval(() => {
    //     console.log("clock Calling");
    //     setTimer(new Date().toLocaleTimeString())
    //   }, 1000);

    //   return () => {
    //     clearInterval(timerRef)                           // i stop the button it was stoped and un-necessary data stoped in background
    //   }                                                         // .current it was stoped the current data 

    // },[])


    
  return (
    <div>
        <h3>Time : {timer} </h3>
    </div>
  )
}

export default ClockDemo