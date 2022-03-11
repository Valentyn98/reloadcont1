import React from 'react';
import Cat from "./Cat";

const Cats = ({cats,dispatch}) => {
    return (
        <div>
            {cats.map(cats => <Cat key={cats.id} cats={cats} dispatch={dispatch}/>)}
        </div>
    );
};

export default Cats;