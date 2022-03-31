import React, {useEffect} from 'react';
import Car from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";
import {getAllCars} from "../../store";

const Cars = () => {
    const {cars,status,error} =  useSelector(state => state['carReducer']);

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllCars())
    },[])
    return (
        <div>
            {status === 'pending' && <h1>Load</h1>}
            {error && <h1>{error}</h1>}
            {cars.map(cars => <Car key={cars.id} cars = {cars}/>)}
        </div>
    );
};

export default Cars;