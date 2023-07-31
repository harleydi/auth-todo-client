import React from 'react'
import { useOutletContext } from 'react-router-dom'
import TodoCard from '../Components/TodoCard'

const Todos = () => {
  const { todos, handleDelete, handleEdit } = useOutletContext()
  return (
    <div>
      {todos.map((todo) => <TodoCard key={todo._id} todo={todo} handleDelete={handleDelete} handleEdit={handleEdit}  />)}
    </div>
  )
}

export default Todos