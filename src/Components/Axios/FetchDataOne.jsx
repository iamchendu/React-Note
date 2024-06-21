import axios from 'axios';
import {useEffect, useState} from 'react'
import loaderImg from'..//..//Images/loader.gif';

const FetchDataOne = () => {

    const[user,getUser] = useState([]);

    const[error,setError] = useState('');

    const[load,setLoader] = useState(false);                       

// Example ,  Onclick button need's then data show 


    const getUserList = () => {

        setLoader(true);                                        // whenever data not found load image is show 

        axios.get("https://jsonplaceholder.typicode.com/users")                         // suppose it was valid url , true value show , unvalid url false value show 

        .then((welcome) => {                                        // true data show 

            // console.log(welcome);

            getUser(welcome.data);                              // whenever data found success data show 
            setLoader(false);                                   // whenever data found load image is hide 

        }).catch((fail) => {                                            // false data show 

            setError(fail.message);                                // whenever data not found error show 
            setLoader(false)                                     // suppose data not found load image is not hide 
        })
    }


// Example , onclick button no need's 

    useEffect(() => {
        var x = document.querySelector("#btn");                                     // id called 
        x.addEventListener("click",getUserList)                                     // function called 
    },[])

  return (

    <div>

        <h1> FetchDataOne </h1>

{/* Example , whenever click the button get the data  */}

        {/* <button onClick={getUserList} id='btn'> Get Data </button>  */}                              

        <button id='btn'> Get Data </button>                    

{/* Loader message show  */}

        {
            load && <img src={loaderImg} alt="loading..." height={30} width={30} />                                         // loader image add          

        }


        <br /> <br />

{/* Error message show  */}

        { error && <p>{error}</p> }


{/* Display the data on browser  */}

        {
                user.length > 0 ? 
                <table border={1} cellSpacing={0} cellPadding={20}>                 {/*We can Design the table*/}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Web Site </th>
                            <th>Phone</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            user.map((item,index) => <tr key={index}>
    
                                <td> {item.id} </td>
                                <td> {item.name} </td>
                                <td> {item.email} </td>
                                <td> {item.website} </td>
                                <td>{item.phone}</td>

                            </tr>)
                        }
                    </tbody>
                </table>
                : null
            }   

    </div>
  )
}

export default FetchDataOne