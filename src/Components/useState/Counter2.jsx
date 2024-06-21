
import { useState } from "react"

const Counter2 = () => {

// Example , whenever component transfer , different componet need's the different variable name's 

    const [ageOne,setAge] =   useState(1)            // Destructuring of the array 

    const [age2,setAge2] = useState(10)

    const [sub,setsub] = useState("React");


// Example , increase the value 

    const increAge = () => {
        setAge2(age2 + 1 )
    }

    const decreAge = () => {
        setAge2( age2 - 1)
    }
// Example , Change the value 

    const changeSub = () => {

    // Example - one subject change 

            //  setsub("JAvaScript");

    // Example - multiple value change and shufle the value updating  , one by one 

            let subject = ["Html" , "CSs", "JAva", "JSx", "React", "Menu", "Ovta"];

            subject.sort( function(){
                return Math.random() - 0.5
            } )
            setsub(subject[1]);

    }   


    return(
        <div>

            <h1>Counter Two Component </h1>

            <h3> Start : {ageOne} </h3>
            <button onClick={() => setAge(ageOne+1)}>Increment</button>                     {/* Direct method used  */}
            <button onClick={() => setAge(ageOne-1)}>Decrement</button>                     {/* Direct method used  */}



            <br />

            <h3> Age :   {age2} </h3>
            <button onClick={increAge}>Increment</button>
            <button onClick={ decreAge }>Decrement</button>


            <br />


            <h3>Subject - {sub} </h3>
            <button onClick={changeSub}>Update</button>                         {/* Change the textData */}
            <button onClick={() => setsub()} > Hide</button>                            {/* Hide the textData */}

        </div>
    )
}
export default Counter2