import React, { useState } from 'react'
import { connect } from "react-redux"
import { addTodos, editTodos, removeTodos, doneTodos } from '../redux/reducer'

const mapStateToProps = (state) => {
    return {
        todos: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        editTodo: (obj) => dispatch(editTodos(obj)),
        doneTodo: (id) => dispatch(doneTodos(id)),
    };
};

const Addtask = (props) => {

    const [todo, setTodo] = useState("");

    const handleChange = (e) => {

        setTodo(e.target.value);

    }



    //console.log("todo text", todo);
    return (
        <div className="addTodos">
            <input className="addtodo" placeholder="Enter New Task..." type='text' onChange={(e) => handleChange(e)} />
            <button className="add-btn" onClick={() => props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                done: false,
            })}>
                Add new Task
            </button>
            <br />
            
        </div >
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Addtask);
