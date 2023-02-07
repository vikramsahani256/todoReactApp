import React, { useState } from 'react'

// import myTodoList from '../dataSet/todoList';
// import Todos from './Todos';


const AddTodo = (props) => {
  
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");

  let myTodoList = props.my_todo_list ; 

  let [todos,setTodo] = useState(myTodoList);


  const submit= (e)=>{

    e.preventDefault();
    if(!title ){
      alert("title or description is mission!");
    }else{
      props.AddTodo(title,desc);
      setTitle("");
      setDesc("");

      document.getElementById('title').value = ''
      document.getElementById('desc').value = ''

    }

  }

  return (
    <div className='container my-3'>
      <h4 className='text-center'>Add A New Task</h4>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="title" className="form-label">Todo Title</label>
          <input type="text" onChange={(e)=>setTitle(e.target.value)}
           className="form-control" id="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" onChange={(e)=>setDesc(e.target.value)}
          className="form-control" id="desc" />
        </div>

        <div className="text-center" > 
         <button type="submit" className="btn btn-sm btn-success" >Add Todo</button>
        </div>

      </form>
    </div>
  )
}

export default AddTodo
