import React, { useEffect } from 'react'

const DomAccess = () => {

    useEffect(()=>{

// Example , dom manipulating to the react 

        var ele = document.querySelector(".block")
        ele.style.cssText = "border:3px solid green; height:100px; width:300px;"
        ele.innerHTML = "<h1>Hello World</h1>"
        ele.setAttribute("title" , "Hello JS")

    },[])
  return (
    <div>
        <h1> Dom Access component </h1>

        <div id='block' className='block'>
            
        </div>
    </div>
  )
}

export default DomAccess