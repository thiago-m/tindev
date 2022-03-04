import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import './Login.css'

import api from '../services/api'

import logo from '../assets/logo.svg'

export default function Login(props) {
  const [username, setUsername] = useState('')
  let navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    const { data: {_id} } = await api.post('/devs', {username})

    navigate(`/dev/${_id}`)
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tinder" />
        <input 
          placeholder='Digite seu usuário do GitHub'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
