import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';
import AddTodo from './MyComponent/AddTodo';
import React , {useState , useEffect} from 'react';





function App() {
  
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = []
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  console.log("initTodo====",initTodo);

  let [todos,setTodos  ] = useState(initTodo);
  useEffect(() => {
    console.log("in use effect in app.js",todos) ;
    debugger
    todos = initTodo ;
  }, [initTodo])

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    
    const myTodo = {
      sno         : todos.length + 1 ,
      title       : title,
      description : desc,
    }
    console.log("=====[...todos, myTodo]=====",[...todos, myTodo])
    debugger
    todos = JSON.parse(localStorage.getItem("todos")) ; 
    setTodos([...todos, myTodo]);
    
    localStorage.setItem("todos",JSON.stringify(todos)) ;
    console.log(myTodo);
  }




  return (
    <>

    {/* <Header title = "My Todo List" isSearchBar = {false} /> */}
    <div class="container">
    <AddTodo my_todo_list = {todos} AddTodo = {addTodo} />
    <Todos   my_todo_list = {todos} />
    </div>
    
    {/* <Footer/> */}

    </>
  );
}

export default App;
