import React from 'react';

const Dog = ({dog,dispatch}) => {
    let {id,name} = dog
    const delDog = () => {
        dispatch({type:'DEL_DOG',payload:{id}})
    }
    return (
        <div>
            {name}
            <button onClick={delDog}>DeleteDog</button>
        </div>
    );
};

export default Dog;