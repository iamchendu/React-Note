// Exampole of  Conditionalrendering 


const ConditionalRendering2 = () =>{

// 
    let sub = ["Html","CSS","JAVA","Python","BootStrap","React JS "];
    let data = [];


// Example - return a condition on JavaScript 

    // if(sub.length > 0){
    //     return <h1> Success</h1>
    // }
    // else{
    //     return <h1> Error</h1>
    // }


// Example  - Return the JSX Condition in JavaScript 

    // if(sub.length > 0){
    //     return(
    //         <div>
    //             <h1>Subject's : {sub.join(",")}</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>Error</h1>
    //         </div>
    //     )
    // }


// Example  , We can write like this with vaariable 

        // let x;

        // if(sub.length > 0){
        //     x = (
        //         <div>
        //             <h1>Subject's : {sub.join(",")}</h1>
        //         </div>
        //     )
        // }
        // else{
        //     x = (
        //         <div>
        //             <h1>Error</h1>
        //         </div>
        //     )
        // }
        // return x;


// Example 

        // let a;
        // if(data.length > 0){
        //     a = <h1>SuccessFul</h1>
        // }
        // else{
        //     a = <h1> Error </h1>
        // }
        // return a;



// Example 


    return(

    <div>

{/* Example , Array value available or not showing */}

    {
        sub.length > 0 ? <h1>Subject's : {sub.join(",")} </h1> : <h1> Sorry Subject not Found </h1>
    }


{/* Example  */}


    {
        data.length > 0 ? <h1>Data : {data.join(",")} </h1> : <h1> Sorry Data not Found </h1>
    }


{/* Example - Data Not Avail , Empty Show  */}

    {
        data.length > 0 ? <h1>Data : {data.join(",")} </h1> : null
    }


    </div>

    )


}
export default ConditionalRendering2;