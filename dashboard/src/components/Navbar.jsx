import axios from 'axios'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout')
      navigate('/')
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/dashboard" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </Link>
        <div className="flex md:order-2">
          <button className="navbar_button_logout" onClick={Logout}>Log out</button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="navbar_toggler"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="navbar_list">
            <li>
              <Link to="/dashboard" className={`navbar_list_item ${location.pathname === '/dashboard' ? 'text-blue-700' : ''}`}>Home</Link>
            </li>
            <li>
              <Link to="/catalog" className={`navbar_list_item ${location.pathname === '/catalog' ? 'text-blue-700' : ''}`}>Catalog</Link>
            </li>
            <li>
              <Link to="/order" className={`navbar_list_item ${location.pathname === '/order' ? 'text-blue-700' : ''}`}>Order</Link>
            </li>
            <li>
              <Link to="/users" className={`navbar_list_item ${location.pathname === '/users' ? 'text-blue-700' : ''}`}>Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
