import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import FormAuthTemplate from "../Templates/FormAuthTemplate";

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const Register = async(e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/users', {name, email, password, confPassword})
      navigate('/')
    } catch(error) {
      if(error.response) {
        setMessage(error.response.data.message)
      }
    }
  }

  return (
    <FormAuthTemplate
      title={'Register'}
      subTitle={'Pastikan semua yang Anda masukkan sudah benar'}>
      <form onSubmit={ Register }>
        <div className="mb-6">
          <label
            htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            className="form_input"
            placeholder="John Doe"
            required
            value={name}
            onChange={e => setName(e.target.value)} />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="form_input"
            placeholder="nama@gmail.com"
            required value={email}
            onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form_input"
            placeholder="Password Anda"
            required
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm-password">Konfirmasi Password</label>
          <input
            type="password"
            id="confirm-password"
            className="form_input"
            placeholder="Konfirmai Password"
            required
            value={confPassword}
            onChange={e => setConfPassword(e.target.value)} />
        </div>
        <div className="mb-6">
          <span className="form_error_message">{message}</span>
        </div>
        <button className="form_button">Register</button>
      </form>
    </FormAuthTemplate>
  );
}

export default Register;