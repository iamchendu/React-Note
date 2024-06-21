

//Example - Pass the Data One Component to Another Component 


import PropsDemo from "./Components/Props/PropsDemo"

// import PropsDemo1 from "./Components/Props/PropsDemo1";

const Props = () => {
// 
// 
      const user = "Chandu" ; 

// 

      const sub = ["Html" , "CSS", "Java", "React", "JS", "BootStrap", "Python"];

// 

      const x = true;

// 

      const data = [
        { ID : 1 , name  : "RAM" , email : "ram@gmail.com" , pin : "232"} ,
        { ID : 2 , name  : "MAHI" , email : "mahi@gmail.com" , pin : "83"} ,
        { ID : 3 , name  : "KESA" , email : "kesa@gmail.com" , pin : "928"} ,
        { ID : 4 , name  : "LISA" , email : "lisa@gmail.com" , pin : "93"} ,
        { ID : 5 , name  : "HENI" , email : "heni@gmail.com" , pin : "02"}
    ]

// 

    const SomeAction = () => {
          alert("Hello World ")
    }


// Example -  style css passing a one component to another component 

    let myStyles = {backgroundColor:'red' , color:'white'}


      return (

  <div className="container">

      <h1>Props component </h1>
      


{/*  first component */}

 {/* Scenario  */}

 

        {/* Example -  Data Transfer with html Attribute */}

            <PropsDemo myname={user} title="Hello World " subject={sub} />                    

        {/* Example - conditionally (ternary) */}

           <PropsDemo 
              myturn={user}
              title={x ? "Props Successful " : "Sorry Error "}
              subject={sub}  
              userList={data}
           /> 




{/* Second component  */}

{/* Scenario - 2  */}

        {/* <PropsDemo1 username={user} title='Some Prop' subject={sub} dataList={data}  myAction={SomeAction} 
              ourStyles= {myStyles}
        />
         */}

        
    </div>

  )


}

export default Props