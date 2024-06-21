import { createSlice } from "@reduxjs/toolkit";


// Example - initialState use with , object , array , string , boolean , array of object's , like we can use


    // const initialState = ["Html" , "CSs" , "java"]                              


    // const initialState = { id :'1' , name:'cs' , city : 'Hyd'}


    // const initialState = [
    //     { id :'1' , name:'cs' , city : 'Hyd'},
    //     { id :'2' , name:'kl' , city : 'Pune'},
    //     { id :'3' , name:'mn' , city : 'Ap'}
    // ]


    // const initialState = "Chendu"


    const initialState = 100


const counterSlice = createSlice({                                          // create the slice 

    name : "chendu", 
    initialState,
    reducers : {
        incrementCounter : (state,action) => {
            return state = state + 1 
        } ,
        decrementCounter : (state,action) => {
            return state = state - 1 
        }
    }
})
export const {incrementCounter , decrementCounter } = counterSlice.actions
export default counterSlice.reducer                                                          // every slice in redux , need's to write on export deafault namewith.reducer 