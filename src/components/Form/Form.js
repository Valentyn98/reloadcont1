import React, {useRef} from 'react';

const Form = ({dispatch}) => {

    const sCat = useRef()
    const sDog = useRef()

    const setCat = () => {
        dispatch({type:'ADD_CAT',payload:sCat.current.value})
    }
    const setDog = () => {
        dispatch({type:'ADD_DOG',payload:sDog.current.value})

    }
    const submit = (e) => {
      e.preventDefault()
      e.target.reset()
    }
    return (
        <div>
            <form onClick={submit}>
                <label/>Cat<input type="text" placeholder={'cat'} ref={sCat}/>
                <button onClick={setCat}>AddCat</button>
                <label/>Dog<input type="text" placeholder={'dog'} ref={sDog}/>
                <button onClick={setDog}>AddDog</button>
            </form>
        </div>
    );
};

export default Form;