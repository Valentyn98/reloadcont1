import React from 'react';

const Cat = ({cats,dispatch}) => {

    const deleteCat = () => {
      dispatch({type:'DEL_CAT',payload:{id:cats.id}})
    }
    return (
        <div>
            {cats.name}
            <button onClick={deleteCat}>deleteCat</button>
        </div>
    );
};

export default Cat;