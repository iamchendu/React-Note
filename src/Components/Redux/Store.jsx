import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
const store = configureStore({
    reducer:{
        
// CounterSlice  component is created and it was imported the store component 
// Whatever data imported into the store component , all data available into automitically 

        counter : CounterSlice                                                      

    }
})
export default store