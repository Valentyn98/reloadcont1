import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./car.slice";


const store = configureStore({
    reducer:{ // option
        carReducer
    }
})

export default store