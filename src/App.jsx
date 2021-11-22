import React, { Fragment, useState, useRef, useEffect } from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";


 const KEY= "todoApp, todos";
export function App() {
    const [todos, setTodos] = useState([
        { id: 1, task: "Tarea1", completed: false },
    ]);

    const todoTaskRef = useRef();

    useEffect(() => {
        const storedTdos = JSON.parse(localStorage.getItem(KEY));
        if(storedTdos){
            setTodos(storedTdos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (id) => {

        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);

    };

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if(task=== '') return;
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), task, complete: false}]
        });

        todoTaskRef.current.value = null;


    }

    const handleClearAll = ()=> {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }
    return (
        <Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
            <button onClick={handleTodoAdd}>Agregar</button>
            <button onClick={handleClearAll}>Eliminar</button>
            <div>Te quedan {todos.filter((todo) => !todo.completed).length} tarea por completar</div>
        </Fragment>
    );

}