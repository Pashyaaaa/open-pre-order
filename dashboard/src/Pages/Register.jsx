import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

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
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <span className="text-base font-semibold text-red-500">{message}</span>
      <form onSubmit={ Register } className="w-96">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" id="name" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Email</label>
          <input type="text" id="email" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="confirm-password" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Confirm Password</label>
          <input type="password" id="confirm-password" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required value={confPassword} onChange={e => setConfPassword(e.target.value)} />
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
      </form>
    </div>
  );
}

export default Register;