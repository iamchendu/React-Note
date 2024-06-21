// Scenario 

//Example -  Access the props data inside a component 

const PropsDemo = (props) => {

    // console.log(props);                     // Prop Object is created 

    return (

        <section>

        {/* Example  */}

            <h1>{props.myname} - {props.title} </h1>

            <h2>Subject - {props.subject.length} </h2>

            <hr />

        {/*  Example - Props collected Array value  */}

            <ul>
                {
                    props.subject.map((item, index) =>
                        <li key={index}> {item} </li>
                    )
                }
            </ul>


            <hr />

        {/* Example - Array Object's  */}

            <h1>User List </h1>


            {
                props.userList?.length > 0 ?
                    
                        <table style={{height:"100px", width:"100px"}} className="container">
                            <thead>
                                <tr style={{backgroundColor:"cyan"}}>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    <th>Pin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.userList.map((items, index) => <tr key={index}>

                                        <td>{items.ID}</td>
                                        <td>{items.name}</td>
                                        <td>{items.email}</td>
                                        <td>{items.pin}</td>

                                    </tr>)
                                }
                            </tbody>
                        </table>

                     : <h2> Error </h2>

            }

        </section>
    )
}
export default PropsDemo