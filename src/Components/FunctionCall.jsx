//  How to call a function ?  

// Example - Function inside another function create and called in JSX  

    let user = " Ram ";
    let sub = ["Html", "Css" , "Java" , "React" , "JS"];

// function create , with parameter 

    const greeting = () => {
        return "Greeting From " +user
    }

// function create 

    const calculateTotal = (price , d) => {
        return price - (price * d / 100)
    }               

const FunctionCall = () => {

    return (
        
    <div>

        <h1> ComponentCreated </h1>

        <h2>Hello {user} </h2>
        <h2>Subject's  - {sub.join(',')}</h2>

        <h2>{greeting()} </h2>                                                   {/* function called in jsx */}

        <h2> You have to pay - {calculateTotal(1500 , 25)} </h2>                      {/* function called and direct value put here */}


    {/* Example - component outside Multiple  function using , how to calling   */}


            <Message />
            <Button /> 

    </div>

    )
}

// Example - function created 

  function Message(){
    return(
      <div>
        <h1> Hello World </h1>
      </div>
    )
  }



// function created 

    const Button = () => {
      return(
        <button>
          <h1> Click Me </h1>
        </button>
      )
    }

export default FunctionCall