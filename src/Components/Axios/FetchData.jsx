import axios from 'axios';
import {useState,useEffect} from 'react'

const FetchData = () => {

// Example , Fetching Data to the server 

    const[user,setUser] = useState([])

    useEffect( ()=>{

        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{                            // json Api add 

            // console.log(res);

            setUser(res.data);                                                  // it was update the 10 record's 

        }).catch((error)=>{

            console.log(error);


        })

    })
  return (
    <div>
        <h1>Fetching Data -  {user.length} </h1>

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

export default FetchData