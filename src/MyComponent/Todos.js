import React , {useState ,useEffect } from 'react'
import TodoItems from './TodoItems'
// import myTodoList from '../dataSet/todoList';




const Todos = (props) => {
  useEffect(() => {
    setTodo(props.my_todo_list);
    localStorage.setItem("todos",JSON.stringify(props.my_todo_list)) ;

    
  }, [props.my_todo_list])

let myTodoList = props.my_todo_list ; 

let [todos,setTodo] = useState(myTodoList);

const onDelete = (task) =>{
  console.log("I am Deleted! ",task);
  todos =  todos.filter((item)=>item !== task) ;
 setTodo(todos); // set the values in todo array
 localStorage.setItem("todos",JSON.stringify(todos)) ;

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
