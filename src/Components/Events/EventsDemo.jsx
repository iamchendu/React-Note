// React Events 

// How can be access the event object inside a function ? 

// function inside function using ...

function EventsDemo(){

// Example 

// onclick 
    const wel = () => {
        alert("Hello ")
    }

// ondoubleclick
    const hel = () => {
        alert(" Hii Bro ")
    }

// onmouseover
    const vel = () => {
        alert(" Thank u ...")
    }

// Example -  without parameter

    const rel = (name) => {
        alert(" Message from "+name)
    }

// function create , with parameter 

    let a = " Chendu ";
    const greeting = () => {
        return "Greeting From " +a
    }

// Example - Event 

    const handleEvent = (a) =>{
        console.log(a);
        a.target.remove()
    }

// Example  - Event target 

    const handleInput = (n) => {
        console.log(n.target);                      // current element getting 

        console.log(n.target.id);                   // Current element value getting 
        console.log(n.target.className);
        console.log(n.target.placeholder);
        console.log(n.target.value);
    }

    return(

        <div>

            <h1> React Events </h1>

{/* Example  */}

            <button onClick={wel}>onClick</button>

            <button onDoubleClick={hel}>onDoubleClick</button>

            <button onMouseOver={vel}>onMouseOver</button>


{/* Example - without parameter  */}

            <button onClick={() => rel("Ram")}>Click</button>


{/* Example - with parameter */}

            <h1>{greeting()}</h1>
            

{/* Example - Event  */}

            <button onClick={(b) => handleEvent(b) }>Handle Event </button>             {/* button removed */}

{/* Example  */}

        <input onChange={(event) => handleInput(event)} type="text" name="user" id="uname" className="control" placeholder="Enter the UserName"/>

        </div>
    )
}
export default EventsDemo