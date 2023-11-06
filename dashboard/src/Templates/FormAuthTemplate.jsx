import React from 'react'
import { Link } from 'react-router-dom'

const FormAuthTemplate = ({ title, subTitle, children }) => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mb-2">
          {title} <span className="text-blue-700">Open PO Dashboard</span>
        </h1>
        <p className="font-semibold mb-6">
          {subTitle}
        </p>
        {children}
        <p className="font-semibold">
          {title === 'Log in' ? 'Tidak punya akun?': 'Sudah punya akun?'} <Link to={title === 'Log in' ? '/register': '/'} className="text-blue-700">{title === 'Log in' ? 'Register' : 'Log in'} di sini</Link>.
        </p>
      </div>
    </div>
  )
}

export default FormAuthTemplate
