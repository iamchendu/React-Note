const Data = () => {

// Example 

    const sub = ["Html" ,"CSS" , "JavaScript" ] ;
 
// Example 

    const city = "HyderaBadh";
    const user = "Chendu" ;

// Example 

    const x = {id : 1 , name : "Ram" , sub : "ReactJS" , pin : "98273"}


    return(
        <div>

            <h1> Data Component </h1>
            <h2> Welcome {user} from {city} </h2>


        {/* Example -  Array value called  */}

            <h2> Subject's : {sub} </h2>                                

            <h2> Subject's : {sub.join(",")} </h2>                     {/* Array value called and join method use    */}

            <h2> Subject's : {sub.sort().join(",")} </h2>                     {/* Array value Assigning with sort method ( A to Z)  */}

            <h2> Subject's : {sub.sort().reverse().join(",")} </h2>                     {/* Array value reverse ,  Designing    */}



        {/* Example -  Particular Object value  called  */}

            <h2>User : {x.name}  and Subject :  {x.sub} </h2>

            <h2>User : {x["name"]}  and Pin :  {x["pin"]} </h2>


        {/* Example - Convert Object into string  */}

            <h2> Data : {JSON.stringify(x)} </h2>



        {/* Example - Propert and value split the Array   */}

            <h2>{Object.entries(x)} </h2>


        </div>
    )
}

export default Data;