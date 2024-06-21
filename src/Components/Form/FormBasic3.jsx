// Scenario  , validate the form data  


import {useState} from 'react';
import './Form.css';

const FormBasic3 = () => {

    const intialState = {username:'', email:'',password:'', cpassword:'', mobile:'',gender:'',hobbies:[],address:'',terms:''}

    const[formInfo,setFormData] = useState(intialState) ;

    const [formError,setFormError] = useState({})

    // const [message , setMessage] = useState('')

// All data Updated 

    const hloInput = (event) => {

        // console.log(event.target.type);                              // It was show the which type of input box , i write 

    
    // Example , in this method only worked for checkbox  


        if(event.target.name === "terms")                                // If the term checkbox checked is true valued show , not checked false value undefiend show 
            {
                setFormData({
                    ...formInfo,
                    [event.target.name] : event.target.checked ? event.target.value : ""
                });
            }
            else if(event.target.name === "hobbies")                          // If i checked value add on the array , if i unchecked value not add in the array 
                {
                    let arr = formInfo.hobbies;
                    let exits = arr.indexOf(event.target.value);
                    if(exits === -1 )
                        {
                            arr.push(event.target.value)                        // Whatever i clicked in hobbie's checkbox that value push into an array 
                        }
                    else{
                        arr.splice(exits,1)                                     // Whatever i clicked in hobbie's checkbox that value remove into an array          
                    }   

                    // console.log(arr);   
                    
                    setFormData({
                        ...formInfo,
                        [event.target.name] : arr
                    });

                }
            else{
                setFormData({
                    ...formInfo,
                    [event.target.name] : event.target.value
                });
            }

    }
    
    const hloSubmit = (event) => {

        event.preventDefault();                                     // preventDefault , it's working page not refreshing  ..

        if(accessData())                                            // accessData it was my own function and we created with any name 
        {

        // Example , data send the console 


            console.log("Sending from data to server",formInfo);                                     // submit the data 


        // Example , Ajax using , How Data send to the Server process  . 
        
            // const obj = new XMLHttpRequest();
            // obj.open("POST","",true);                                               // Php , json , any Api adding and create the data 
            // obj.send(JSON.stringify(formInfo));
            // obj.onreadystatechange = () => {
            //     if(obj.readyState === 4 && obj.status === 200)
            //     {
                
                // 
                    // console.log(obj.responseText);                                 // create the folder and adding on ---> Network   ---> fetch / XHR  ---> folder ---> created 


            //  EXample , suppose login successful got message , fail got message 

                    // const data = JSON.parse(obj.responseText);

                    // if(data.status === true)
                    // {
                    //     setMessage(data.message)
                    // }
                    // else{
                    //     setMessage("Sorry something went wrong !  .. ")
                    // }
                // }
            // }
        }
    }

           
    // accessData

            const accessData = () => {                        // In this function verifying the form Data

                let x = true;
    
                let errors = {};


    
            // validate username 

                if(formInfo.username === "")                        // suppose data not entering in input box then false work ,  Error Message show
                {
                    x = false;
                    errors.username = "Sorry ! please Username is Required"                           // Data not entering in username then false work ,  Error Message show
                }
                else{                                                                        //Suppose , Data not enter 4 to 20 character  then this function is worked 
                    if(formInfo.username.length <= 3 || formInfo.username.length >= 20)
                    {
                        x = false;
                        errors.username = "Sorry ! please Username should between 4 to 20 character' is Required" ;
                    }
                }


            // validate email 

                if(formInfo.email === "")                        // suppose data not entering in input box then false work ,  Error Message show
                {
                    x = false;
                    errors.email = "Sorry ! please E-mail is Required"                              // Data not entering in email then  false work , Error Message show
                }
                else
                {
                    if(!validateEmail(formInfo.email)){                            // function create and ! add , and it was validated email
                        x = false ;
                        errors.email = " valid email is required " 
                    }
                }

            
            // Validate password or confirm password 

                if(formInfo.password === ""){
                    x = false;
                    errors.password = "Password is Required"
                }
                else{                                                   // password need's the upper and lower case numerical and some character 

                    if(!validatePassword(formInfo.password)){
                        x = false;
                        errors.password = " password must contain at least eight character's , at leat one number and both lower and uppercase letter's and special character's "
                    }
                }

                //confirm password 

                    if(formInfo.cpassword === ""){
                        x = false;
                        errors.cpassword = "Confirm Password is Required"
                    }

                // In this function use for if the both password is not match it was not required 

                    if(formInfo.password != formInfo.cpassword ){                        
                        x = false;
                        errors.cpassword = " Error ! Password does not match " ; 
                    }


            // Hobbie's validation 

                if(formInfo.hobbies.length === 0 )
                {
                    x = false;
                    errors.hobbies = "Please select at least one hobbie's "
                }



            // Number validation 

                if(formInfo.mobile === "")
                {
                    x = false ;
                    errors.mobile = " Mobile number is requried "
                }
                else{
                    if(!validateMobileNumber(formInfo.mobile))
                    {
                        x = false ;
                        errors.mobile = " Mobile number should be 10-digit's , and valid number is required  "
                    }
                }
                



            // Term's validation 

                   if(formInfo.terms === "")
                   {
                        x = false;
                        errors.terms = "Please accept the term's and Condition "
                   }
    


            //////

                setFormError(errors)
                return x;
    
            }

    console.log(formError);
    

// validate Email ,  suppose it was valid it give's true ,  Suppose it's invalid it give's false 

    // in this code copy on web site (javascript validate email searching )

        const validateEmail = (email) => {
            return email.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };



// validate password , we create with some character , suppose it was valid it give's true ,  Suppose it's invalid it give's false 


    const validatePassword = (pwd) => {
        return pwd.match(
            /^(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
        )
    }


// Terms    , suppose terms checked error not show , unchecked error show 

    const acceptTerm = (ter) => {
        setFormError({
            ...formError,
            [ter.target.name] : ter.target.checked ? " " : "Sorry we want Accept the Term's and Condition"
        })
    }


// Hobbie's , suppose any one item checked error not show , unchecked error show 

    const handleHobbies = (event) => {
        if(formInfo.hobbies.length != 0)
        {
            setFormError({
                ...formError,
                hobbies:''
            })
        }
    }


// Mobile number validation , 6 to 9 start number and 10 digit's valid number 

    const validateMobileNumber = (mobilenumber) => {

        // Regular expression to match a 10 digit number starting with  6 , 7 , 8 , 9

        const numberPattern = /^[6789]\d{9}$/ ; 

        // Test the input mobile number against the [pattern]
        
        return numberPattern.test(mobilenumber);
    }


// Whenever I focus in mouse put in input box , then error message  is hide 

    const hideError = (event) => {
        setFormError({
            ...formError,
            [event.target.name] : '' ,                     
            [event.target.email] : '' ,
            [event.target.password] : '' ,
            [event.target.mobile] : '' ,
        })
    }


// Whenever i mouse out an input box , then error message  is show 
 // Data not enter and mouse out in this input then then this message show 

 
    const showError = (event) => {
        if(event.target.value === "")
        {
            setFormError({
                ...formError,
                [event.target.name] : event.target.name+" is required ", 
                [event.target.email] : event.target.email + "is required " ,
                [event.target.password] : event.target.password+ "PW is required " ,
                [event.target.cpassword] : event.target.cpassword+ " is required " ,
            })
        }
    }




  return (
<div>

    <h1>Register</h1>

    {/* {message && <p className='success'> {message} </p> } */}


    <form onSubmit={hloSubmit} className='form-container'>
        <div className='formgroup'>
            <label>UserName</label>
            <input onFocus={hideError} onBlur={ showError} onChange={hloInput} value={formInfo.username} type="text" name='username' className='formcontrol' />
        
        {/* Example  , It was show the suppose empty data is submit then error show */}

            {formError.username && <p className='error' style={{color:'red'}}>{formError.username} </p>}

        </div>
        <div className='formgroup'>
            <label>E-mail</label>
            <input onFocus={hideError} onBlur={ showError} onChange={hloInput} value={formInfo.email} type="text" name='email' className='formcontrol' />

            {formError.email && <span className='error' style={{color:'red'}}>{formError.email} </span>}

        </div>
        <div className='formgroup'>
            <label>Password</label>
            <input onFocus={hideError} onBlur={ showError} onChange={hloInput} value={formInfo.password} type="password" name='password' className='formcontrol' />
            {formError.password && <span className='error' style={{color:'red'}}>  {formError.password} </span>}
        </div>
        <div className='formgroup'>
            <label>Confirm Password </label>
            <input onFocus={hideError} onBlur={showError} onChange={hloInput} value={formInfo.cpassword} type="password" name='cpassword' className='formcontrol' />
            {formError.cpassword && <span className='error' style={{color:'red'}}>{formError.cpassword} </span>}
        </div>
        <div className='formgroup'>
            <label>Mobile</label>
            <input onChange={hloInput} onFocus={hideError} value={formInfo.mobile} type="text" name='mobile' className='formcontrol' />
            {formError.mobile && <span className='error' style={{color:'red'}}>{formError.mobile} </span>}
        </div>
        <div className='formgroup'>
            <label>Gender : </label>
            <label>   <input onChange={hloInput} type="radio" name="gender" value='M'/> Male</label>
            <label>  <input  onChange={hloInput} type="radio" name="gender" value='F'/>Female </label>
            <label>  <input  onChange={hloInput} type="radio" name="gender" value='O'/>Other</label>
        </div>
        <div className='formgroup'>
            <label> Address : </label>
            <textarea onChange={hloInput} value={formInfo.address} name="address" className='formcontrol'></textarea>
        </div>
        <div className='formgroup'>
            <label> Hobbies : </label>
            <label>  <input onClick={handleHobbies} onChange={hloInput}  type="checkbox" name="hobbies" value="Running"/> Running</label>
            <label>  <input onClick={handleHobbies} onChange={hloInput}  type="checkbox" name="hobbies" value="Football"/>Football </label>
            <label>  <input onClick={handleHobbies} onChange={hloInput}  type="checkbox" name="hobbies" value="Cricket"/>Cricket</label>
            <label>  <input onClick={handleHobbies} onChange={hloInput}  type="checkbox" name="hobbies" value="Hockey"/>Hockey</label>
            <label>  <input onClick={handleHobbies} onChange={hloInput}  type="checkbox" name="hobbies" value="Bike"/>Bike Ride</label>
            <label>  <input onClick={handleHobbies} onChange={hloInput}  type="checkbox" name="hobbies" value="Phtography"/>Photography</label>
            <label>  <input onClick={handleHobbies} onChange={hloInput}  type="checkbox" name="hobbies" value="Travel"/>Travel</label>
            {formError.hobbies && <p className='error' style={{color:'red'}}>{formError.hobbies} </p>}
        </div>
        <div className='formgroup'>
            <label>
                <input onChange={hloInput} onClick={acceptTerm} type="checkbox" name="terms" id="" value="Yes" />
                 Please Accept the Terms and Condition's  
            </label>
            {formError.terms && <p className='error' style={{color:'red'}}>{formError.terms} </p>}
        </div>
        <div className='formgroup'>
            <input type="submit" value="Register" />
        </div>
    </form>
</div>
  )
}

export default FormBasic3