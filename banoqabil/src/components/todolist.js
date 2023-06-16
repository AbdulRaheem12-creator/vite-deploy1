import React from 'react'

function todolist(props) {
  return (
    <li className='list-item'>
        {props.item}
        <span className='icons'>
        <i class="fa-duotone fa-trash icon-delete">
        onClick={e=>{
            props.deleteItem(props.index)
        }}</i>
        </span>
    </li>
  )
}

export default todolist