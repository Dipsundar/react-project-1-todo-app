import React, { useState } from 'react';
import Todos from './Todos';
import style from './Home.module.css';
import NewTodo from './NewTodo';
import { v4 as uuidv4 } from 'uuid';

// const dummyTodos = [
//     {
//         id: 1,
//         title: "Todo - 1",
//         desc: "This is todo 1 desc and Hey I am todo -1 body"
//     },
//     {
//         id: 2,
//         title: "Todo - 2",
//         desc: "This is todo 2 desc and Hey I am todo -2 body"
//     }
// ]

const Home = () => {


    const [todos, setTodos] = useState([]);

    const handleTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), todo }]
        })
    };

    const handleRemoveTodo = (id) => {
        // alert(id);
        setTodos((prevTodos)=>{
            const filteredTodos = prevTodos.filter((todo)=> todo.id !== id);
            return filteredTodos;
        })
    };

    return (
        <div className={style.container}>
            <h1 style={{ color: "white" }}>Todo App</h1>
            <NewTodo onAddTodo={handleTodo} />
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
        </div>
    )
}

export default Home
