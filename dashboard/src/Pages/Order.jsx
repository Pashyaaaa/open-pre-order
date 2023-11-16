import React, { useEffect, useState } from 'react'
import DefaultTemplate from '../Templates/DefaultTemplate'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Order = () => {
  const [order, setOrder] = useState([])

  useEffect(() => {
    getOrder()
  }, [])

  const getOrder = async () => {
    const response = await axios.get('http://localhost:5000/order')
    setOrder(response.data)
  }

  const handleChangeFormatDate = date => `${date.substring(0, 10)} / ${date.substring(11, 16)} ${date.substring(25)}`

  return (
    <DefaultTemplate>
      <div className='pt-24'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-4xl font-bold'>Order Client Page</h1>
        </div>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">No</th>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Nama</th>
                <th scope="col" className="px-6 py-3">No Whatsapp</th>
                <th scope="col" className="px-6 py-3">Alamat</th>
                <th scope="col" className="px-6 py-3">Tanggal Order</th>
                <th scope="col" className="px-6 py-3">Tanggal Ambil</th>
              </tr>
            </thead>
            <tbody>
              {
                order.map((item, i) => (
                  <tr key={item.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {i + 1}
                    </th>
                    <td className="px-6 py-4">
                      {item.id}
                    </td>
                    <td className="px-6 py-4">
                      <Link to={`/order/${item.id}`}>{item.nama}</Link>
                    </td>
                    <td className="px-6 py-4">
                      {item.whatsapp}
                    </td>
                    <td className="px-6 py-4">
                      {item.alamat}
                    </td>
                    <td className="px-6 py-4">
                      {handleChangeFormatDate(item.tanggal_order)}
                    </td>
                    <td className="px-6 py-4">
                      {handleChangeFormatDate(item.tanggal_ambil)}
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

export default Order
