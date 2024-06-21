import {useState} from 'react'
import '../Styling React Component/Style.css'

const Counter7 = () => {
    const list = [
        { ID : 1 , name  : "RAM" , email : "ram@gmail.com" , pin : "232",salary:20000} ,
        { ID : 2 , name  : "MAHI" , email : "mahi@gmail.com" , pin : "83",salary:50000} ,
        { ID : 3 , name  : "KESA" , email : "kesa@gmail.com" , pin : "928",salary:25000} ,
        { ID : 4 , name  : "LISA" , email : "lisa@gmail.com" , pin : "93",salary:35000} ,
        { ID : 5 , name  : "HENI" , email : "heni@gmail.com" , pin : "02",salary:40000}
    ]
    const[user,userData] = useState(list);
    
    // Remove the Array object , Delete a record for array list ,  by choosing any data delete 

    const deleteUser = (a) => { 
        const x = user.filter((item) => {
            return item.ID !== a
        });
        userData(x);
    }

    // By Clicking , Remove the All User's in Array object 

    const deleteAllUsers = (b) => {
        userData([]);                       //Delete the all data at one time 
    }


    // Update the value by choosing

    const upSalary = (c) => {
        const data = user.map((xo) => {
            if(xo.ID === c){
                return {...xo, salary : xo.salary + (xo.salary * 15 / 100)}
            }
            return xo
        });
        userData(data);

    }
  return (
    <div>
        <h1>Counter 7 Component </h1>
        {
                user.length > 0 ? <table id='customers' border={1} cellSpacing={0} cellPadding={10}>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Pin-No</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        user.map((item,index) =><tr key={index}>
                            <td>{item.ID}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.pin}</td>
                            <td>{item.salary}</td>

                            <td>
                                <button onClick={ () => deleteUser(item.ID)}> Delete </button>                                <button onClick={ () => upSalary(item.ID)}> Update</button>
                            </td>
                        </tr>)
                       }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={6} style={{textAlign:'center'}}>
                                <button onClick={deleteAllUsers} style={{padding:'10px', width:'200px'}}> Delete All </button>
                            </td>
                        </tr>
                    </tfoot>
                </table> : <h2 style={{color:'red'}}> Error ! </h2>
            }
    </div>
  )
}

export default Counter7