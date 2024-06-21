// Scenario 

import { useState } from "react"

const Counter3 = () => {

// Example - Many of Object value How to Get on Display with 1 useState 

    const info = {id:1 , username :'Ram' , city :"Hyd" , pin : 232 };               
    const[data,setData] = useState(info);


// Example , Replace the Object Value 

    const changeCity = () => {
    
        setData({

            ...data,                        // Existing all object value here 

            city : "Mumbai"                     // It was replace with  city vlaue 

        })
    }


// Example 

    const [item,setItem] = useState({id:10,name:"vasu",email:'cs@gmail.com',pin:293,city:"Mumbai"});


    // Replace the object value 

        const upName = () =>{
            setItem({
                ...item,
                name : "Ravi"
            })
        }


// Example - shortly code write 

    const changePin = () => setData({...data, pin : 92323});

    
  return (
    <div>
        <h1>Counter 3 component </h1>
        <u><h2> User Information </h2></u>

    {/* Example - object value get  */}

            <h3>
                Name : {data.username}

                <br />

                City : {data.city}

                <br />

                city : {data.city}

            </h3>


    {/* Example  */}

        <h3>
            Name : {item.name}
            <br/>
            Email : {item.email}
            <br/>
            Pin : {item.pin}
        </h3>



        <button onClick={upName}> Update </button>

    {/* Example - replace the Object Value  */}
    
            <button onClick={changeCity}> Change City </button>
            <button onClick={changePin}> Change Pin </button>


    </div>
  )
}

export default Counter3