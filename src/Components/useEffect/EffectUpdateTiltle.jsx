import {useEffect,useState} from 'react'

const EffectUpdateTiltle = () => {

    const[counter,setCounter] = useState(0);

// Example 

    useEffect(()=> {

    // Example - 1 

        // document.title = " Chandu ";                                // check on title tab it was updated 

    // Example - 2 

        // document.title = "You clicked "+counter+ " Time's "                // check on title tab it was updated 

    // Example - 3 

        // document.title = " I clicked "+counter+ " Time's "                // check on title tab it was updating


    // EXample - 4

        document.title = `I clicked ${ counter } Time's `               // check on title tab it was updating


    },[counter])               // Example 3 and 4  , variable add on [] ,  whenever clicking then it was automitically updating

  return (
    <div>
        <h1>Update the title component </h1>

        <button onClick={() => setCounter(counter+1)}> You clicked {counter} Time's  </button>
    </div>
  )
}

export default EffectUpdateTiltle