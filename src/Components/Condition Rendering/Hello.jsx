import Login from "./Login";
import Welcome from "./Welcome";

function Hello()
{
    let x = true;
    return(
    <div>
        <h2> Redering Component Conditionally </h2>


{/* Example - Conditionally rendering  with Ternary  */}

        {
            x === true ? <Welcome /> : <Login />
        }


{/* Example  */}

        {
            x === false ? <Welcome /> : <Login />
        }

    </div>
    )
}
export default Hello;