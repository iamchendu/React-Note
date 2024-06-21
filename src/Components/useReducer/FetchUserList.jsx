import axios from 'axios'
import {useReducer,useEffect} from 'react'

const initialState = {
    users : [] ,
    errorMsg : '',
    status:''
}

const fetchUserData = (x , y) => {

    switch(y.type)
    {
        case 'pending' :
            return {
                users : [] ,
                errorMsg :'' ,
                status:'loading'
            }

        case 'success' :
            return{
                users: y.chendu ,
                errorMsg : '',
                status:'success'
            }

        case 'fail' :
            return{
                users: [],
                errorMsg: y.chendu,
                status:'fail'
            }
    }
}
const FetchUserList = () => {

    const[count ,dispatch] = useReducer(fetchUserData , initialState )
    console.log(count);

    useEffect(() => {

        dispatch({type:'pending'})

        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {                     // something wrong on code then error message show 

        dispatch({type : "success" , chendu : res.data})                        // i write chendu , we can take any word name 

        }).catch((err) => {

            dispatch({type : "fail" , chendu : err.message})                        

        })
    },[])

  return (
    <div>
        <h1>Fetch USer List </h1>

{/* Error Message */}

        {count.errorMsg && <p>{count.errorMsg}</p> }

{/* Loading Message  */}

        {count.status === 'loading' && <p> Loading .. </p> }


{/* Display the data on browser , get the data */}

            {
                count.users.length > 0 ? 
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
                            count.users.map((item,index) => <tr key={index}>
    
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

export default FetchUserList