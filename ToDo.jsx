import React from "react";
import './ToDo.css';
import 

function ToDolist() {

    const [todoList, setTodoList] = React.useState('');
    const [todo, setTodo] = React.useState([]);

    const list_todo = (e) => {
        setTodoList(e.target.value);
    };

    const list = () => {
        setTodo((oldtodo) => {
            return [...oldtodo, todoList]

        })
        setTodoList('')
    };

    const delete_val = (i) => {
        const delete_val = [...todo]
        delete_val.splice(i, 1)
        setTodo(delete_val)
    }

    const remove_all = (i) => {
        const remove_all = [...todo]
        remove_all.splice(i)
        setTodo(remove_all)
    }

    return (
        <div className="main_page">
            <div className="center_page">
                <h1> ToDo list </h1>
                <h3>Add Your Item</h3>
                <input className="input_box" type="text" placeholder=" List of item " value={todoList} onChange={list_todo} />
                <button className="list-button" onClick={list}> Add </button>
                <div className="buttonn">
                    <ol>
                        {todo.map((val) => {
                            return (
                                <li>
                                    {val} &nbsp;
                                    <button className="butoon" onClick={delete_val}>X</button>
                                </li>
                            )
                        })}
                    </ol>
                    <button className="remove-all" onClick={remove_all}>Clear all</button>
                </div>
            </div>
        </div>
    )
};

export default ToDolist;
