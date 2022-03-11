
import './App.css';
import {useReducer} from "react";
import Form from "./components/Form/Form";
import Cats from "./components/Cts/Cats";
import Dogs from "./components/Dgs/Dogs";


function App() {
    const reducer = (state,action) => {
        switch (action.type){
            case 'ADD_CAT':{
                return {...state, cats: [...state.cats, {id: new Date().getTime, name: action.payload}]}
            }
            case 'ADD_DOG':{
                return {...state,dogs: [...state.dogs, {id: new Date().getTime, name: action.payload}]}
            }
            case 'DEL_CAT':{
                return {...state, cats:state.cats.filter(cat => cat.id !== action.payload.id  )}
            }
            case 'DEL_DOG':{
                return {...state, dogs:state.dogs.filter(dogs => dogs.id !== action.payload.id )}
            }
        }
    }
  let [{cats,dogs},dispatch] =  useReducer(reducer,{cats: [], dogs: []})

  return (
    <div>
        <Form dispatch={dispatch}/>
        <Cats cats={cats} dispatch={dispatch}/>
        <Dogs dogs={dogs} dispatch={dispatch}/>
    </div>
  );
}

export default App;
