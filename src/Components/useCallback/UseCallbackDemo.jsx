import React, { useCallback, useState } from 'react'
import Demo1 from './Call1'
import Demo2 from './Call2'
import Demo3 from './Call3';
// import Demo3 from './Demo3';

const UseCallbackDemo = () => {

    const[age,setAge] = useState(23);

    const[salary,setSalary] = useState(20000)

// Whenever i clicked , data show with unnecessary re-renders data will be called , avoid un-necessary re-renders data  then we use useCallback hook 

    
    const incrementAge = useCallback(() =>{
        setAge(age + 1 );
    },[age])


    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000 )
    },[salary])



  return (
    <div>
        <h1>UseCallback Demo</h1>

{/* Example , Normal component data passing  */}

        <Demo1 label='Age' value={age} />

        <Demo2 label='Increment Age' action={incrementAge} />

        <hr />

{/* Example ,  Data Passing , same component  */}

        <Demo1 label='Salary' value={salary} />
        <Demo2 label='Increment Salary' action={incrementSalary}/>

        <Demo3 />
    </div>
  )
}

export default UseCallbackDemo