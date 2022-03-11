import React, {useRef} from 'react';

const Form = ({dispatch}) => {
    
    const sCat = useRef()
    const sDog = useRef()


    const saveC = () => {
        dispatch({type:'SET_CAT',payload:sCat.current.value})
    }
    const saveD = () => {
        dispatch({type:'SET_DOG',payload:sDog.current.value})
    }

    const submit = (e) => {
        e.preventDefault()
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={submit}>
                <label/>Cat<input type="text"placeholder={'cat'} ref={sCat}/>
                <button onClick={saveC}>Cat</button>
                <label/>Dog<input type="text" placeholder={'dog'} ref={sDog}/>
                <button onClick={saveD}>Dog</button>
            </form>
        </div>
    );
};

export default Form;