import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DefaultTemplate from '../Templates/DefaultTemplate'
import axios from 'axios'

const OrderDetail = () => {
  const { id } = useParams()
  const [orderDetails, setOrderDetails] = useState([])
  const [namaUser, setNamaUser] = useState('')
  useEffect(() => {
    getOrderDetails()
    getUsername()
  }, [])
  
  const getUsername = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/order/${id}`)
    setNamaUser(response.data.nama)
  }
  const getOrderDetails = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/order/${id}`)
    setOrderDetails(response.data.order_details)
  }

  return (
    <DefaultTemplate>
      <div className='pt-24'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-4xl font-bold'>Order Client Detail | {namaUser}</h1>
        </div>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">No</th>
                <th scope="col" className="px-6 py-3">Gambar Produk</th>
                <th scope="col" className="px-6 py-3">Nama Produk</th>
                <th scope="col" className="px-6 py-3">Harga Dasar</th>
                <th scope="col" className="px-6 py-3">Jumlah Produk</th>
                <th scope="col" className="px-6 py-3">Total Harga</th>
              </tr>
            </thead>
            <tbody>
              {
                orderDetails.map((item, i) => (
                  <tr key={item.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {i + 1}
                    </th>
                    <td className="px-6 py-4">
                      <img className='max-w-lg rounded-lg w-32 h-36 object-cover' src={item.catalog.url} alt="Image Product" />
                    </td>
                    <td className="px-6 py-4">
                      {item.catalog.nama_produk}
                    </td>
                    <td className="px-6 py-4">
                      Rp {item.catalog.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </td>
                    <td className="px-6 py-4">
                      {item.jumlah}
                    </td>
                    <td className="px-6 py-4">
                      Rp {item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default OrderDetail
