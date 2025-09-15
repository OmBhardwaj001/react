import React from 'react'

const TodoItem = (props) =>{
    return (
        <li className='Todo-item'>
        <span>
        {props.completed? <></> : <input type='checkbox'/>}
        <span style={{margin:'10px'}}>{props.text}</span>
        </span>
        <p>...</p>
        </li>
    )
}

 export default TodoItem;