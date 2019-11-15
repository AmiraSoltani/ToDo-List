import React from 'react'
import { Button } from 'antd';


const TodoItems = (props) => {
    return (
        <div>
           
            {props.items.map(el=>
                <div key={el.key} className="tasks">
                <Button className="btn-task" onClick={(e) => {e.preventDefault();props.completeItem(el.key)}}>{el.checked ? "Undo" : "Done"}</Button>
                <Button className="btn-task" onClick={(e) => {e.preventDefault();props.deleteleTodo(el.key)}}>Delete</Button>
                <p  className={el.checked ? "checked" : ""}>{el.text}</p>
            </div>)}
        </div>
    )
}

export default TodoItems
