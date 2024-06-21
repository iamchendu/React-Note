import React, { useEffect, useRef, useState } from 'react'

const RefDemoHook = () => {

// How can we access useRef 

    const titleRef = useRef();
    const inputRef = useRef();

    useEffect(() => {

// Example , useRef Design apply , and attach to the selector's 

        document.querySelector("h1").style.color = 'red'                            // useRef worked 
        document.querySelector("input").style.background="pink"                           // useRef worked 
 
// Example 

        inputRef.current.focus()                                                // focused on input 
    })

  return (
    <div>

{/* Example , useRef access ,  like (id , class , selector's ) */}

        <h1 ref={titleRef}>Ref Demo Component </h1>
        <input ref={inputRef} type="text" name="" id="" />


    </div>
  )
}

export default RefDemoHook