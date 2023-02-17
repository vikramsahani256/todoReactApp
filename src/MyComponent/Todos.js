import React , {useState ,useEffect } from 'react'
import TodoItems from './TodoItems'
// import myTodoList from '../dataSet/todoList';




const Todos = (props) => {
  useEffect(() => {
    setTodo(props.my_todo_list);
    localStorage.setItem("todos",JSON.stringify(props.my_todo_list)) ;

    
  }, [props.my_todo_list])

// let myTodoList = props.my_todo_list ; 

let [todos,setTodo] = useState(props.my_todo_list);

const onDelete = (task) =>{
  console.log("I am Deleted! ",task);
  console.log("=======before delete =======",todos);

  todos =  todos.filter((item)=>item !== task) ;
  console.log("=======after delete =======",todos);
  setTodo(todos); // set the values in todo array
  console.log("=======after delete ===2222====",todos);

  localStorage.setItem("todos",JSON.stringify(todos)) ;

  console.log("get local storage====>>>>",JSON.parse(localStorage.getItem("todos")))
}



let myStyle={
  minHeight : "70vh",
  margin : "10px 0"
}

  return (
    <div  className='container my-5' style={myStyle}>
      <h3 className='my-3 text-center' >Todo List</h3>
      <hr></hr>
      {todos.length === 0 ? <p>No Todos List Available!</p> :
      todos.map((task)=>{
        return (
        <>
        <TodoItems todo={task} key={task.sno} onDelete = {()=>{onDelete(task)}}/>
        <hr></hr>
        </>)
      })}
    </div>
  )
}

export default Todos
