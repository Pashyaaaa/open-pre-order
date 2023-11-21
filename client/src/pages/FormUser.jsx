import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/datepicker.min.js'
import { CartContext } from "../App";
import axios from 'axios';

const FormUser = () => {
  const navigate = useNavigate()
  const { cart, setCart } = useContext(CartContext)
  const [token, setToken] = useState('')
  const [order, setOrder] = useState({
    nama: "",
    whatsapp: "",
    alamat: "",
    tanggal_ambil: "",
    order_detail: cart
  })

  
  
  const PostOrder = async(e) => {
    e.preventDefault()

    const config = {
      headers: {
        "content-type": "application/json"
      }
    }

    try {
      const response = await axios.post('http://localhost:5000/order', order, config)
      setToken(response.data.token)
      setCart([])
      console.log('Berhasil')
    } catch(error) {
      if(error.response) {
        console.log('Gagal')
        setMessage(error.response.data.message)
      }
    }
  }

  useEffect(() => {
    if(token) {
      window.snap.pay(token, {
        onSuccess: (result) => {
          localStorage.setItem("Pembayaran", JSON.stringify(result))
          setToken('')
        },
        onPending: (result) => {
          localStorage.setItem("Pembayaran", JSON.stringify(result))
          setToken('')
        },
        onError: (error) => {
          console.log(error)
          setToken('')
        },
        onClose: () => {
          console.log('Anda belum menyelesaikan pembayaran')
          setToken('')
        }
      })
      setOrder({
        ...order,
        nama: "",
        whatsapp: "",
        alamat: "",
        tanggal_ambil: "",
        order_detail: cart
      })
    }
  }, [token])


  useEffect(() => {
    const midtransUrl = 'https://app.sandbox.midtrans.com/snap/snap.js'

    let scriptTag = document.createElement("script")
    scriptTag.src = midtransUrl

    const midtransClientkey = "SB-Mid-server-WlNg4ce-wWgeQkFp1Z04oMg6"
    scriptTag.setAttribute("data-client-key", midtransClientkey)

    document.body.appendChild(scriptTag)
    return () => {
      document.body.removeChild(scriptTag)
    }
  }, [])

  return (
    <div className='pt-5 pb-10'>
      <h2 className="font-bold text-2xl text-green-900 ms:text-xl">
        Form Order
      </h2>
      <form className='mt-8' onSubmit={PostOrder}>
        <input type="hidden" name="catalog_id" />
        <div className="mb-6">
          <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
          <input
            type="text"
            id="nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            required
            onChange={e => setOrder({
              ...order,
              nama: e.target.value
            })}
            value={order.nama} />
        </div>
        <div className="mb-6">
          <label htmlFor="noTel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Whatsapp</label>
          <input
            type="tel"
            id="noTel"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            required
            onChange={e => setOrder({
              ...order,
              whatsapp: e.target.value
            })}
            value={order.whatsapp} />
        </div>
        <div className="mb-6">
          <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
          <input
            type="text"
            id="alamat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            required
            onChange={e => setOrder({
              ...order,
              alamat: e.target.value
            })}
            value={order.alamat} />
        </div>
        <div className="mb-6">
          <label htmlFor="tanggal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Pengambilan</label>
          <input
            type="datetime-local"
            name="tanggal_ambil"
            id="tanggal"
            onChange={e => setOrder({
              ...order,
              tanggal_ambil: e.target.value
            })}
            value={order.tanggal_ambil} />
        </div>
        <button
          className="mt-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
        <button className="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-2" name="Konfirmasi" aria-label="Konfirmasi Pesananan" onClick={() => {
          navigate(-1)
        }}>Batalkan Pesananan</button>
      </form>
    </div>
  )
}

export default FormUser
