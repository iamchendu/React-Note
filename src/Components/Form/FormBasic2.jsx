import {useState} from 'react'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Form.css'

const FormBasic2 = () => {

    const[item,formData] = useState({user:'',email:''});

 // It was intracting with input and value which text box inside i write

    const hloInput = (event) => {              
      formData({
        ...item,
       [event.target.name]: event.target.value
      })
    }

// 

    const allSubmit = (event) => {
      event.preventDefault();
      console.log(item);                                    // Data updated 
    }

  return(
    <div className='form-container'>

        <h1> FormBasic 2 Component </h1>

        <br />
            <form onSubmit={allSubmit}>
                <div className="formgroup">
                    <label>Name</label>
                    <input type="text"  className="formcontrol"  onChange={hloInput} name="user"/>
                </div>
                <div className="formgroup">
                    <label>E-mail</label>
                    <input type="email" className="formcontrol"  onChange={hloInput} name="email"/>
                </div>
                <div className="formgroup">
                    <button type='submit'>SAVE</button>
                </div>
            </form>
    </div>
  )
}

export default FormBasic2