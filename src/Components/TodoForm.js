import React, { useState} from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

const TodoForm = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("medium")

    const { createTodo } = useOutletContext()
    const navigate = useNavigate()

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const data = {
            title,
            description,
            priority
        }
        const result = await createTodo(data)
        if (result) {
            setTitle("")
            setDescription("")
            setPriority("medium")
            navigate("/todos")
        }
    }


  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <label>
                Title:
                <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <br />
            <label>
                Description:
                <input 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <br />
            <label>Priority:</label>
            <select onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default TodoForm