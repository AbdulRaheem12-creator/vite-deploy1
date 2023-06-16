import React, { useState } from 'react'
import "./App.css";

const App = () => {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== ""){
      settodos([{id: '${todo}-${Date.now()}' ,todo},...todos]);
      settodo("");
    }
  }
  const handleDelete=(id)=>{
    const deltodo=todos.filter((to)=>to.id !==id);
    settodos([...deltodo])
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1>MY TO-DO LIST</h1>
        <form className='todoform' onSubmit={handleSubmit}>
          <input type='text' value={todo} onChange={(e)=>settodo(e.target.value)}/>
          <button type='submit'>Go</button>
        </form>

        <ul className='Alltodos'>
          {todos.map((t) =>(
              <li className='singletodo'>
              <span className='todotext' key={t.id}>{t.todo}</span>
              <button>Edit</button>
              <button onClick={()=>handleDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
