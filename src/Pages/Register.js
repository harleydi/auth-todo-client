import React, { useState } from 'react'
import { registerUser } from '../Api/api'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const data = {
        email,
        password
    }
    const registerResult = await registerUser(data)
    if (registerResult.success) {
        setEmail("")
        setPassword("")
        navigate('/login')
    }
  }

  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleOnSubmit}>
            <label htmlFor='email'>
                Email:
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label htmlFor='password'>
                Password:
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Register

// build register and login form, does not have to work yet