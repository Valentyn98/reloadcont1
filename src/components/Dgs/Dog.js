import React from 'react';

const Dog = ({dog,dispatch}) => {

    const deleteDog = () => {
      dispatch({type:'DEL_DOG',payload:{id:dog.id}})
    }
    return (
        <div>
            {dog.name}
            <button onClick={deleteDog}>deleteDog</button>
        </div>
    );
};

export default Dog;