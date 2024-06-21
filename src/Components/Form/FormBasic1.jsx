import { useState } from 'react';
import './Form.css'

const FormBasic1 = () => {

    const[user,setUser] = useState(); 
    const[email,setEmail] = useState();
 


    /// Event ,  Current element intracting the value 


    const handleUserName = (event) => {
        setUser(event.target.value);                       // Current text data whatever type , it was updating 
    }
// 

    const updateEmail = (event) => {
        setEmail(event.target.value);                       // Current text data whatever type , it was updating 
    }   



// 
    const Submit = (event) => {                            // The Value will be submited 
        event.preventDefault();             
        console.log(user,email);
    }



    return(
        <div className="form-container">
            <h1> Form Basic 1 component</h1>

            <br />
            <form onSubmit={ Submit }>
                <div className="formgroup">
                    <label>Name</label>
                    <input type="text" onChange={ (a) => handleUserName(a)} value={user} className="formcontrol"/>
                </div>
                <div className="formgroup">
                    <label>E-mail</label>
                    <input type="email" onChange={ (b) =>  updateEmail(b) } value={email} className="formcontrol"/>
                </div>
                <div className="formgroup">
                    <input type="submit" className="btn" value='Register'/>
                </div>
            </form>
        </div>
    )
}
export default FormBasic1