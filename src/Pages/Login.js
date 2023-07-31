import React, { useState } from 'react'
import { loginUser } from '../Api/api'
import { setUserToken } from '../Auth/authLocalStorage'
import { useNavigate, useOutletContext } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const { setRefreshToken } = useOutletContext()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setRefreshToken(true)
    const data ={
        email,
        password
    }
    const loginResult = await loginUser(data)
    if (loginResult.success) {
        setUserToken(loginResult.token)
        setEmail("")
        setPassword("")
        setRefreshToken(false)
        navigate('/todos')
    }

  }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleOnSubmit}>
            <label>
                Email:
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login