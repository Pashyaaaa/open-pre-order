import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const Auth = async(e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/login', {email, password})
      navigate('/dashboard')
    } catch(error) {
      if(error.response) {
        setMessage(error.response.data.message)
      }
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <span className="text-base font-semibold text-red-500">{message}</span>
      <form onSubmit={ Auth } className="w-96">
        <div className="mb-6">
          <label htmlFor="email-username" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Email of username</label>
          <input type="text" id="email-username" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required  value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      </form>
    </div>
  );
}

export default Login;