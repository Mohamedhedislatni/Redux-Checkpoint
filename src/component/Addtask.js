import React, { useState } from 'react'
import { connect } from "react-redux";
import { addTodos, editTodos, removeTodos, doneTodos } from '../redux/reducer'
import ListTask from './ListTask';

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
    const [sort, setSort] = useState("active");
    return (
        <div>
            <div className="threes-btn">
                <button  className="three-btn" onClick={() => setSort("active")}>Not yet</button>
                <button  className="three-btn" onClick={() => setSort("done")}>Done</button>
                <button  className="three-btn" onClick={() => setSort("all")}>All</button>
            </div>
            <ol className="aze">
                {
                    props.todos.length > 0 && sort === "active"
                        ? props.todos.map((item) => {
                            return (
                                item.done === false && (
                                    <ListTask
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        editTodo={props.editTodo}
                                        doneTodo={props.doneTodo}
                                    />
                                )
                            );
                        })
                        : null
                }

                {props.todos.length > 0 && sort === "done"
                    ? props.todos.map((item) => {
                        return (
                            item.done === true && (
                                <ListTask
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    editTodo={props.editTodo}
                                    doneTodo={props.doneTodo}
                                />
                            )
                        );
                    })
                    : null}
                {props.todos.length > 0 && sort === "all"
                    ? props.todos.map((item) => {
                        return (
                            <ListTask
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                editTodo={props.editTodo}
                                doneTodo={props.doneTodo}
                            />
                        );
                    })
                    : null}
            </ol>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Addtask);
