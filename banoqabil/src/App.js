import React from 'react'
import "./App.css"
import todoinput from './components/todoinput'
import todolist from './components/todolist';
function App() {
  const [listTodo,setlistTodo]=useState([]);
  let addlist = (inputText)=>{yarn 
    setlistTodo([...listTodo,inputText]);
  }
  const deletelistItem = (key)=>{
    let newlistTodo = [...listTodo];
    newlistTodo.splice(key,1)
    setlistTodo([...newlistTodo])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <Todoinput addlist={addlist} />
        <h1 className='app-heading'>TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return(
            <Todolist key={i} index={i}  item={listItem} deleteItem ={deletelistItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App
