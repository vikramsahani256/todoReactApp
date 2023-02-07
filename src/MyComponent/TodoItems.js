import React from 'react'

const TodoItems = (props) => {
  let myStyle = {
          "height": '50%',
      "width": '50%',
      "display": 'flex',
      "align-items": 'center',
      "justify-content": 'center',
      
  }
  return (
    <div className="d-flex justify-content-between">
      <h5>{props.todo.title}</h5>
      { props.todo.description ? <p style={myStyle}>{props.todo.description}</p> : ""}
      <button className='btn btn-sm btn-danger' onClick={props.onDelete}> Delete </button>
    </div>
  )
}

export default TodoItems ; 
