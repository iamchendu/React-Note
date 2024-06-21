import React, { useReducer, useState } from 'react'
import './Todo.css';


    const initialState = {
        todos :[                                                                            // it was array
            {                                               // we created array object data
                id : 1 , 
                title : "Need to pay EmI " ,
                description : " In publishing and graphic designer , lorem ipsu m data ",
                completed : true
            },
            {
                id : 2 , 
                title : " I play " ,
                description : " In publishing and graphic designer , lorem ipsu m data " ,
                completed : false
            }
        ],
        formData : {}
    }


    const todoReducer = (a , b ) => {

        switch(b.type)
        {

// Delete the todo list 

            case 'deleteTodo': 
                const dlt = a.todos.filter((item) => {
                    return item.id !== b.payload
                })

            // It was remain the choosing item to delete 

                return{
                    todos : dlt
                }

// Adding todo data 

            case 'addtodo':
                return{
                    todos : [...a.todos,b.payload]                              // data adding 
                }


// Suppose , mark as completed click , completed style show , not click uncompleted style show 

            case 'mark' :
                const updateItem = a.todos.map((item) => {
                    if(item.id === b.payload)
                    {
                        return {...item , completed: !item.completed}
                    }
                    return item
                })
                return{
                    todos: updateItem
                }

            default:
                return a;
        }
    }

const TodoList = () => {

    const[data,dispatch] = useReducer(todoReducer , initialState);

    const[formData,setformData] = useState({title:'',description:''});
    
// Adding the title and description

    const handleInput = (event) => {
        setformData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    // Submit the data

    const handleSubmit = (event) =>{
        event.preventDefault();

    // Adding todo data 

        const newFormData = {...formData , completed:false , id:Date.now()}
        dispatch({type:'addtodo' , payload:newFormData});

    // Whenever i write the text in input box , suppose data submited , then automitically delete the text in input , create a new input 

        setformData({title:'',description:''});

    }





//////////


  return (
    <div className='container'>
        <h1>Todo List</h1>

        <div className='todo'>
            <div className='todoform'>
                <form onSubmit={handleSubmit}>                              
                    <div className='group'>
                        <label>Title</label>
                        <input value={formData.title} onChange={handleInput}  type="text" name="title" className="control" />                              
                    </div>
                    
                    <div className='group'>
                        <label>Description</label>
                        <textarea value={formData.description} onChange={handleInput} name='description' type="text" className="control"></textarea>
                    </div>

                    <div className='group'>
                        <input type="submit" value="Add" className="btn" />
                    </div>
                </form>
            </div>
            <div className='todolist'>

{/* Display the todos data   */}

                {                                                                  
                    data.todos.length > 0 ? <div className='todocontainer'>
                        {

                        // Example , className adding conditionally 

                            data.todos.map((item,index) => <div className={item.completed === true ?  "todoitem completed" : ' todoitem notcompleted'} key={index}>         
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <button onClick={() => dispatch({type:"deleteTodo" , payload:item.id})}>Delete</button>  
                                <button onClick={() => dispatch({type:'mark', payload:item.id})}>Mark as Completed </button> 
                            </div>)
                        }
                    </div> : <h3 style={{color:'red'}}> Todo Data Not Found ! </h3>
                }

            </div>
        </div>
    </div>
  )
}

export default TodoList