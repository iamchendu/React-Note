// Scenario  with Array of object 

import { useState } from "react";

const Counter6 = () => {

    const userData = [
        { ID : 1 , name  : "RAM" , email : "ram@gmail.com" , pin : "232",salary:20000} ,
        { ID : 2 , name  : "MAHI" , email : "mahi@gmail.com" , pin : "83",salary:50000} ,
        { ID : 3 , name  : "KESA" , email : "kesa@gmail.com" , pin : "928",salary:25000} ,
        { ID : 4 , name  : "LISA" , email : "lisa@gmail.com" , pin : "93",salary:35000} ,
        { ID : 5 , name  : "HENI" , email : "heni@gmail.com" , pin : "02",salary:40000}
    ]
    const [userinfo,setUserInfo] = useState(userData);

// Example , Replace the Array object value 

    const upEmail = () => setUserInfo()


// Example , updating the state  , value 


    // Increment the value by choosing 

    const upSalary = (a) => {
        const data = userinfo.map((hii) => {
            if(hii.ID === a){
                return {...hii, salary : hii.salary + (hii.salary * 15 / 100)}
            }
            return hii
        });
        setUserInfo(data);

    }

    // All the salary  increment at one time 

    const hikeSal = () => {
        const x = userinfo.map((b) => {
            return {...b, salary: b.salary + (b.salary * 10 / 100)}
        });

        setUserInfo(x);
            
    }

    // Total the salary count here 

    const totalSalary = () => {
        const i = userinfo.reduce((start,item) => {
            return start += item.salary
        },0)
        return i
    }





////////////////


    return(
        <div>
            <h1> Counter 6 Component </h1>

        {/* Example - Getting the value  */}
            <h3>Name :{userinfo[3].name} </h3>
            <h3>Emial :{userinfo[3].email} </h3>

        {/* Example - replace the array object value  */}

            <button onClick={upEmail}>Update E-Mail </button>



        {/* Example  */}

            <h3>USER Information </h3>

            <button onClick={() => hikeSal() }>Hike Salary 10% </button>

            <br/> <br/>

            {
                userinfo.length > 0 ? <table border={1} cellSpacing={0} cellPadding={10}>
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
                        userinfo.map((item,index) =><tr key={index}>
                            <td>{item.ID}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.pin}</td>
                            <td>{item.salary}</td>
                            <td>
                                <button onClick={ () => upSalary(item.ID)}> Increment Salary </button>
                            </td>
                        </tr>)
                       }
                    </tbody>

                    <tfoot>                                                         {/* Total value count here  */}
                        <tr>
                            <td colSpan={4} style={{textAlign:'center'}}> Total</td>
                            <td colSpan={2} style={{color:'red' , fontWeight:'bold'}}> {totalSalary()} </td>
                        </tr>
                    </tfoot>


                </table> : <h2 style={{color:'red'}}> Error ! </h2>
            }
            
        </div>
    )
}
export default Counter6;