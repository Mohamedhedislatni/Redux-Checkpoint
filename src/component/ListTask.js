import React, { useRef } from 'react'


const ListTask = (props) => {
    const { item, editTodo, removeTodo, doneTodo } = props;

    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }

    const edit = (id, value, e) => {
        if (e.which === 13) {
            editTodo({ id, item: value });
            inputRef.current.disabled = true;
        }
    };

    return (
        <div className="bord">
        <li key={item.id}>
        <textarea className="text-area" ref={inputRef}
            disabled={inputRef}
            defaultValue={item.item}
            onKeyPress={(e) => edit(item.id, inputRef.current.value, e)}


        />
        <div>
        <button className="btn" onClick={() => changeFocus()}>Edit</button>
        <button className="btn" onClick={() => doneTodo(item.id)}>Done</button>
        <button className="btn" onClick={() => removeTodo(item.id)}>Delete</button>
        </div>
        {item.done && <span><img style={{width:"20px", height:"20px"}} src="https://i.pinimg.com/originals/23/96/cf/2396cf1b65cd08da9b28091e4efd5c82.jpg"/></span>} 
    </li> 
    </div>
    )
}

export default ListTask
