import logo from './logo.svg';
import './App.css';
import {useReducer} from "react";

function App() {
  const reducer = (state,action) => {
    switch (action.type){
      case 'inc':
        return {...state, count1: state.count1 + 1}
      case 'dec':
        return {...state, count1: state.count1 - 1}
      case 'res':
        return {...state, count1: state.count1 = 0}
    }
  }

  const [state,dispatch] = useReducer(reducer, {count1: 0})
  return (
      <div>
        {state.count1}
        <button onClick={()=>dispatch({type: 'inc'})}>INC</button>
        <button onClick={()=>dispatch({type: 'dec'})}>DEC</button>
        <button onClick={()=>dispatch({type: 'res'})}>RES</button>
      </div>
  );
}

export default App;
