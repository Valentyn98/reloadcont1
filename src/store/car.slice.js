import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../serv";



export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_,{rejectWithValue})=>{
        try{
            const cars = await carService.getAll()
            return cars
        }catch (e){
            return rejectWithValue(e.message)
        }
    }
)

const carSlice = createSlice({
    name:'carSlice', //namespace name of slice
    initialState:{
        cars:[],//key
        status:null,
        error:null
    },
      reducers:{
       addCar:(state,action) =>{
           state.cars.push(action.payload.data)
       } ,       //method
       deleteCar:(state,action) =>{
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
       }
    },
    extraReducers:{
        [getAllCars.pending]:(state ,action)=>{
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]:(state, action)=>{
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]:(state, action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export  const  createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data},{dispatch})=>{
        try {
            const newCar = await carService.create(data)
            dispatch(addCar({data:newCar}))
        }catch (e) {
            
        }
    }
)


const carReducer = carSlice.reducer

export const {addCar,deleteCar} = carSlice.actions
export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCar',
        async ({id},{dispatch})=>{
        try {
            await carService.deleteById(id)
            dispatch(deleteCar({id}))
        }catch (e) {
            console.log(e);
        }
        }
)
export default carReducer