// Example Of conditionalRendering 3 



var pro = prompt("Enter The number ");


const ConditionalRendering3 = () => {
    
    let user = parseInt(pro);                           {/* We can Any value of number write in prompt  */}


    let x ;

    switch(user)
    {
        case 1 :
            x = <h1>Offline</h1>;
            break;
        
        case 2 :
            x = <h1> Online </h1>;
            break;

        case 3 :
            x = <h1> Good</h1> ;
            break;

        default :
            x = <h2> Error </h2>
    }
    return x;
}
export default ConditionalRendering3;