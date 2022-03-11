
import './App.css';
import {useReducer, useRef} from "react";
import Form from "./components/Form/Form";
import Cats from "./components/Cts/Cats";
import Dogs from "./components/Dgs/Dogs";

function App() {

  const reducer = (state,action) => {
    switch (action.type){
        case 'SET_CAT':{
            return {...state, cats:[...state.cats, {id:new Date().getTime(), name:action.payload}]}
        }
        case 'SET_DOG':{
            return {...state,dogs:[...state.dogs, {id:new Date().getTime(), name:action.payload}]}
        }
        case 'DEL_CAT':{
            return {...state,cats: state.cats.filter(cat=> cat.id !== action.payload.id)}
        }
        case 'DEL_DOG':{
            return {...state,dogs: state.dogs.filter(dog=> dog.id !== action.payload.id)}
        }
    }
  }
    const [{cats,dogs},dispatch] = useReducer(reducer, {cats:[],dogs:[]})
  return (
    <div>
      <Form dispatch={dispatch}/>
      <Cats cats={cats} dispatch={dispatch}/>
      <Dogs dogs={dogs} dispatch={dispatch}/>
    </div>
  );
}

export default App;
