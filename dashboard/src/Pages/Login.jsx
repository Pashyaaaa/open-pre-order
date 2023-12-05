import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import FormAuthTemplate from "../Templates/FormAuthTemplate"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const Auth = async(e) => {
    e.preventDefault()
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/login`, {email, password})
      navigate('/dashboard')
    } catch(error) {
      if(error.response) {
        setMessage(error.response.data.message)
      }
    }
  }

  return (
    <FormAuthTemplate
      title={'Log in'}
      subTitle={'Silahkan masukkan email dan password anda'}>
      <form onSubmit={ Auth }>
        <div className="mb-6">
          <label
            htmlFor="email-username">Email Anda</label>
          <input
            type="text"
            id="email-username"
            className="form_input"
            placeholder="John Doe"
            required
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form_input"
            placeholder="Pasword Anda"
            required
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="mb-6">
          <span className="form_error_message">{message}</span>
        </div>
        <button className="form_button">Login</button>
      </form>
    </FormAuthTemplate>
  );
}

export default Login;