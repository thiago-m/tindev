import logo from '../assets/logo.svg'
import './Login.css'

export default function Login() {
  return (
    <div className='login-container'>
      <form>
        <img src={logo} alt="Tinder" />
        <input 
          placeholder='Digite seu usuário do GitHub'
        />
        <button>Enviar</button>
      </form>
    </div>
  )
}
