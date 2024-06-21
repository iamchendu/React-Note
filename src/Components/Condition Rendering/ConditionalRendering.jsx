// ConditionRendering Component 

function ConditionalRendering()
{
// What is Git Hub ? 
//  Git hub is Developer's porn hub 
// 
    let isLogin = true ;
    let user = "Ram";

    return(

        <div>
            <h1>Conditional Rendering </h1>

{/* Ternary Operator  */}

        {/* Example , Rendering the value */}
        
            {
                (isLogin === true) ?  <h1> Welcome  My Self  {user} </h1> : <h1> Sorry Plese Login  </h1>

            }
        
        {/* Example  */}

            {
                (isLogin === false) ?  <h1> Welcome  My Self - {user} </h1> : <h2> Sorry Please Login  </h2>

            }


<br /> 

    {/* Example - In ternary We can Add Parent Element inside any logic  and more child element's we can use */}

            {
                (isLogin === true) ? 
                <div>
                    <h1>Successfully </h1>
                    <p>Good Morning</p>
                </div>
                : 
                <div>
                    <h1> Error  </h1>
                    <p>Hiii</p>
                </div>
            }


<br />

    {/*Example  - We can use like this */}

        {
                (isLogin === true) ? 
                <div>
                    <h1>Successfully </h1>
                    <p>Good Morning</p>
                </div>
                : 
                null
        }


<br />

    {/* Example  , We can call the Direct Javacript libaraire's   in ternary operator  */}

        {
                (isLogin === true) ? 
                <div>
                    <h1>Successfully</h1>
                    <p>Time : {new Date().toLocaleTimeString()}</p>
                </div>
                : 
                <div>
                    <h1> Error  </h1>
                    <p> Don't Have an Account , Please Create it .. </p>
                </div>
        }


<br />


{/*      Circuit Operator 

*/}

{/* Example -   We can call the Direct Javacript libaraire's , We can call the value , We can use Parent element inside logic and more child element's  */}

{/* Example -   Only true value working , False value not working it was hide  */}


        {
            (isLogin === true) && 
            <div>
                    <h1>Successfully Update </h1>
                    <p>Date : {new Date().toLocaleDateString()}</p>
                    <h1> Welcome  My Self  {user} </h1>
            </div>
        }


        </div>
    )
}
export default ConditionalRendering;