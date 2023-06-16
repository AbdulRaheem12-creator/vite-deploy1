import React, { useState } from 'react'

function todoinput(props) {
    const [inputText,setInputText] = useState('');
  return (
    <div className='input-container'>
        <input type='text' className='input-box-todo' placeholder='Enter your TODO'
        value={inputText}
        onChange={e=>{
            setInputText("")
        }}/>
        <button className='add-btn'
        onClick={()=>{
            props.addlist(inputText)
            setInputText("")
        }}>+</button>
    </div>
  )
}

export default todoinput