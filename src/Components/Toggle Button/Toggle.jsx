import { useState} from 'react'
import ClockDemo from './ClockDemo'

const Toggle = () => {

// Example , toggle button created

    const[toggle,setToggle] = useState(true);

  return (
    
    <div>
        
{/* Example , toggle button created show and hide  */}

        {
          toggle ? <ClockDemo /> : null
        }

        <button onClick={() => setToggle(!toggle)}>Toggle</button>

    </div>
  )
}

export default Toggle