import React, { useEffect, useState } from 'react'
import DefaultTemplate from '../Templates/DefaultTemplate'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Catalog = () => {
  const [catalogs, setCatalogs] = useState([])

  useEffect(() => {
    getCatalogs()
  }, [])

  const getCatalogs = async () => {
    const response = await  axios.get('http://localhost:5000/catalog/all')
    setCatalogs(response.data)
  }

  const deleteCatalog = async (catalogID) => {
    try {
      await axios.delete(`http://localhost:5000/catalog/${catalogID}`)
      getCatalogs()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DefaultTemplate>
      <div className='pt-24'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-4xl font-semibold'>Catalog Page</h1>
          <Link to="/catalog/add-catalog" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center">Add new catalog</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-base text-left text-gray-800 dark:text-gray-400">
            <thead className="text-base text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Gambar Produk
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Produk
                </th>
                <th scope="col" className="px-6 py-3">
                  Harga Produk
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                catalogs.map((catalog, i) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={catalog.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {i + 1}
                    </th>
                    <td className="px-6 py-4">
                      {catalog.id}
                    </td>
                    <td className="px-6 py-4">
                      <img className={`max-w-lg rounded-lg w-32 h-36   ${catalog.publish ? '' : 'grayscale'}`} src={catalog.url} alt="Image Product" />
                    </td>
                    <td className="px-6 py-4">
                      <span className={catalog.publish ? '' : 'text-gray-500 italic line-through'}>
                        {catalog.nama_produk}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={catalog.publish ? '' : 'text-gray-500 italic line-through'}>
                        Rp {catalog.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-semibold ${catalog.publish ? '' : 'text-red-600'}`}>{catalog.publish ? 'Published' : 'Unpublished'}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="inline-flex rounded-md shadow-sm" role="group">
                        <Link
                          to={`/catalog/edit-catalog/${catalog.id}`}
                          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                          Edit
                        </Link>
                        <button
                          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-500 dark:focus:text-white"
                          onClick={() => deleteCatalog(catalog.id)}>
                          Delete
                        </button>
                      </div>
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

export default Catalog
