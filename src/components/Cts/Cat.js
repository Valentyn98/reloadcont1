import React from 'react';

const Cat = ({cat,dispatch}) => {
    let {name,id} = cat
    const delCat = () => {
      dispatch({type:'DEL_CAT',payload:{id}})
    }
    return (
        <div>
            {name}
            <button onClick={delCat}>DeleteCat</button>
        </div>
    );
};

export default Cat;