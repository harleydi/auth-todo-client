import React, { useEffect, useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import TodoNav from '../Components/TodoNav'
import { addTodo, getAllTodos, deleteTodo, updateTodo } from '../Api/api'

const PrivateRoute = () => {
  const [todos, setTodos] = useState([])
  const [shouldRefresh, setShouldRefresh] = useState()

  const { isVerified, userToken } = useOutletContext()

  useEffect(() => {
    const getTodos = async () => {
        const todosResponse = await getAllTodos(userToken)
        if (todosResponse.success) {
            setTodos(todosResponse.data)
        }
    }

    if (isVerified && userToken) getTodos()
  }, [isVerified, userToken])

  const createTodo = async (data) => {
    setShouldRefresh(true)
    const createResult = await addTodo(userToken, data)
    setShouldRefresh(false)
    return createResult.success
  }

  const handleDelete = async (id) => {
    setShouldRefresh(true)
    const response = await deleteTodo(userToken, id)
    if (response.success) {
        setShouldRefresh(false)
        console.log(response)
    }
  }

  const handleEdit = async(id, data) => {
    setShouldRefresh(true)
    const response = await updateTodo(userToken, data, id)
    if(response.success) {
        setShouldRefresh(false)
    }
  }

  return (
    <div>
        PrivateRoute
        {isVerified && (
            <>
                <TodoNav />
                <Outlet context={{ createTodo, todos, handleDelete, handleEdit }} />
            </>
        ) }
        
    </div>
  )
}

export default PrivateRoute