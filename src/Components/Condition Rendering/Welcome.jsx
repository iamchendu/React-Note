
// Create a Component 


function Welcome()
{
    return(
        <>
            <h1>Hello This is Ram </h1>
            <p> Your login time is : {new Date().toLocaleTimeString()} </p>
        </>
    )
}
export default Welcome;