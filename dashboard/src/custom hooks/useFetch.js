import axios from 'axios'
import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const useFetch = () => {
  const [name, setName] = useState('')
  const [token, setToken] = useState('')
  const [expire, setExpire] = useState('')
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    refreshToken()
    getUsers()
  }, [])

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token')
      setToken(response.data.accessToken)
      const decoded = jwt_decode(response.data.accessToken)
      setName(decoded.name)
      setExpire(decoded.exp)
    } catch(error) {
      if(error.response) navigate('/')
    }
  }

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date()
    if(expire * 1000 < currentDate.getTime()) {
      const response = await axios.get('http://localhost:5000/token')
      config.headers.Authorization = `Bearer ${response.data.accessToken}`
      setToken(response.data.accessToken)
      const decoded = jwt_decode(response.data.accessToken)
      setName(decoded.name)
      setExpire(decoded.exp)
    }

    return config
  }, (error) => {
    return Promise.reject(error)
  })

  const getUsers = async () => {
    const response = await axiosJWT.get('http://localhost:5000/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setUsers(response.data)
  }

  return { name, users }
}

export default useFetch
