import React, {useState} from "react";
import { TodoList } from "./components/TodoList";


export function App(){
    const [todos,setTodos] = useState([
        {id: 1, task:"Tarea1", completed: fañse },
    ]);
    return (
    <TodoList todos={todos}/>
    <input type="text" placeholder="Nueva Tarea" />
    
    );
     
}