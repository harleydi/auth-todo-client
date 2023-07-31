import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { faCheckSquare, faPenToSquare, faRectangleXmark, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoCard = ({ todo, handleDelete, handleEdit }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [completed, setCompleted] = useState(null)
    const [editMode, setEditMode] = useState(false)


  useEffect(() => {
    setTitle(todo.title)
    setDescription(todo.description)
    setPriority(todo.priority)
    setCompleted(todo.completed)
  }, [todo])

  const deleteButton = () => {

    handleDelete(todo._id)


  }

  const handleOnComplete = () => {
    handleEdit(todo._id, { completed: !completed })
  }

  const handleEditSubmit = () => {
    const data = {
        title,
        description,
        priority
    }
    handleEdit(todo._id, data)
    setEditMode(false)
  }


  return (
    <tr style={{ margin: "5px", textAlign: "start" }}>
			{editMode ? (
				<>
					<td></td>
					<td>
						{" "}
						Title:
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>{" "}
						Description:
						<input
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</td>
					<td>
						<select
							value={priority}
							onChange={(e) => setPriority(e.target.value)}
						>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>
					</td>
					<td>
						<FontAwesomeIcon icon={faCheckSquare} onClick={handleEditSubmit} />
						<FontAwesomeIcon icon={faRectangleXmark} onClick={() => setEditMode(false) }/>
					</td>
				</>
			) : (
				<>
					<td>
						<input
							type="checkbox"
							defaultChecked={completed}
							onClick={handleOnComplete}
						/>
					</td>
					<td>
						{title}: {description}
					</td>
					<td>{priority}</td>
					<td>
						<FontAwesomeIcon
							icon={faPenToSquare}
							onClick={() => setEditMode(true)}
						/>
						<FontAwesomeIcon icon={faTrashCan} onClick={deleteButton} />
					</td>
				</>
			)}
	</tr>
  )
}

export default TodoCard