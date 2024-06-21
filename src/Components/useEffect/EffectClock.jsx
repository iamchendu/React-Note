import {useState , useEffect} from 'react'

const EffectClock = () => {

// Example ,   we can access js library  in Hook's 

    const[timer,setTimer] = useState(new Date().toLocaleTimeString());                    

    useEffect(() =>{
        setInterval(()=> {
            setTimer(new Date().toLocaleTimeString())
        },1000)                                                             // Timer is running 
    },[])


  return (
    <div>
        <h1>Effect Clock Component </h1>

        <h3> Time - {timer} </h3>
    </div>
  )
}

export default EffectClock