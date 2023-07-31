import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL

const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${baseURL}/users/register`, userData)
        const data = await response.data
        console.log(data)
        return data
    } catch (error) {
        return error.response.data
    }
}

// login function that accepts user data obj and makes api post to our server to log in

const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${baseURL}/users/login`, userData)
        const data = response.data
        return data
    } catch (error) {
        return error.response.data
    }
}

const validateUser = async (token) => {
    try {
        const response = await axios.get(`${baseURL}/users/validate`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.data
        return data 
    } catch (error) {
        return error.response.data
    }
}

const addTodo = async (token, todoData) => {
    try {
        const response = await axios.post(`${baseURL}/todos/create-todo`, todoData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.data
        return data
    } catch (error) {
        return error.response.data
    }
}

const getAllTodos = async (token) => {
    try {
        const response = await axios.get(`${baseURL}/todos/all-todos`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.data
        return data
    } catch (error) {
        return error.response.data
    }
}

const updateTodo = async (token, todoData, id) => {
    try {
        const response = await axios.put(`${baseURL}/todos/edit-todo/${id}`, todoData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.data
        return data
    } catch (error) {
        return error.response.data
    }
}

const deleteTodo = async (token, id) => {
    try {
        const response = await axios.delete(`${baseURL}/todos/delete-todo/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.data
        return data
    } catch (error) {
        return error.response.data
    }
}

export { registerUser, loginUser, validateUser, addTodo, getAllTodos, updateTodo, deleteTodo }