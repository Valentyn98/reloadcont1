import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarThunk} from "../../store";

const Car = ({cars:{id,model,year,price}}) => {
    const dispatch =  useDispatch()
    return (
        <div>
            <div>
                <div>
                    <div>Model: {model}</div>
                    <div>Year: {year}</div>
                    <div>Price: {price}</div>
                </div>
                <button onClick={()=> dispatch(deleteCarThunk({id}))} > DeleteCar</button>
            </div>
        </div>
    );
};

export default Car;