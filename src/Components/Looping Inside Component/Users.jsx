const Users = () => {

    var userData = [
        { ID : 1 , name  : "RAM" , email : "ram@gmail.com" , pin : "232"} ,
        { ID : 2 , name  : "MAHI" , email : "mahi@gmail.com" , pin : "83"} ,
        { ID : 3 , name  : "KESA" , email : "kesa@gmail.com" , pin : "928"} ,
        { ID : 4 , name  : "LISA" , email : "lisa@gmail.com" , pin : "93"} ,
        { ID : 5 , name  : "HENI" , email : "heni@gmail.com" , pin : "02"}
    ]

    return(
        
        <div>

    {/* Example - Array Object value Iterate the Table Data   */}

        <h1>User List create </h1>

        {
            userData.length > 0 ? 
            <table border={1} cellSpacing={0} cellPadding={20}>                 {/*We can Design the table*/}
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Pin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((item,index) => <tr key={index}>

                            <td> {item.ID} </td>
                            <td> {item.name} </td>
                            <td> {item.email} </td>
                            <td> {item.pin} </td>

                        </tr>)
                    }
                </tbody>
            </table>
            : 
            <h1> Sorry Data Not found </h1>
        }

        </div>
    )
}
export default Users;