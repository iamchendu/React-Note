
// All The JavaScript Libarary We can Access In the React JSX , and all Data Writen inside  { }

function Sample(){

    let sub = "React JS " 

    let a = 3500; 
    let b = 50;

    const dt = new Date();
    
    let x = "200" , y = "300";

    return(

        <div>

        {/* Example - All The JavaScript Libarary We can Access In the React JSX   */}


            <u><h1>JsX Expression</h1></u>

            <h1>{ 10 + 20 -10  }</h1>                         {/* It was calculated */}
            <h1> { "20" + "30"} </h1>                         {/* It was concated */}


        {/* Example - Js Value called in JSX  */}
        
            <h1> We are Learning {sub} </h1>

            <h1> Price of the Outfit is -   {a} , and discount - {b}%  , After discount Apply then price is - {a - a * b / 100 } </h1>


        {/* Example - Current , Url , DAte , Time  , some js method  Get in JSX  */}

            <h1>{document.URL}</h1>

            <h1>Time : {dt.toLocaleTimeString()} </h1>          

            <h1> {Math.min(20 , 30 , 40 ,9 )}</h1>

            <h1> {Math.max(20 , 30 , 40 ,9 )}</h1>

            <h1> { Math.random(Math.floor()).toFixed(2)*10000}</h1>



        {/* Example - convert to String  */}

            <h1> {x + y} </h1>  


        {/* Example - convert to string into number and it was calculated     */}

            <h1> {parseInt(x) + parseInt(y)}</h1> 


        {/* Example  */}

            <h1> {Number(x) + Number(y)}</h1>

                </div>
                
            )
}
export default Sample;