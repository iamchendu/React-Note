
// Scenario 

import ComponentProp from "./ComponentProp"

const PropsDemo1 = (props) => {

  const {username , title ,subject , dataList , myAction , ourStyles} = props                // props object destructuring 

  const city = "HighTech-city" , state = 'Hyd' ;

  return (

  // Example -  css passing to another component 

  <div style={{...ourStyles, padding:'10px', border:'2px solid red' , width:'50%'}}>       


        <u><h1>PropsDemo 1 </h1></u>


    {/* Example - once object destructuring then no needs to write props on jsx  */}

        <h2> Name -  {username} </h2>

        <h2>Title - {title} </h2>

        <h2>Subjects : {subject.join(',')} </h2>

        <h3>
          UserData - {dataList.length} 
        </h3>

        <button onClick={myAction}>Click</button>

<hr/ >

{/* Scenario  */}

    {/* Example - one component data to  Another to another component Data transfer */}


        <ComponentProp mycity={city}  mystate={state} username={username} title={title} />



    {/* Example -  All the Data One Time Transfer  */}

    {/*   {...props} In this mean , Whatever props we are received in this component , that data passing to another component   */}


        <ComponentProp {...props} mycity={city}  mystate={state} username={username} title={title} />



    </div>
  )
}

export default PropsDemo1