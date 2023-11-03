import axios from "axios"
import DefaultTemplate from "../Templates/DefaultTemplate"
import { useEffect, useState } from "react"
import useFetch from '../custom hooks/useFetch'

const Dashboard = () => {
  const { name } = useFetch()
  const [catalogs, setCatalogs] = useState([])

  useEffect(() => {
    getCatalogs()
  }, [])

  const getCatalogs = async () => {
    const response = await axios.get('http://localhost:5000/catalog/all')
    setCatalogs(response.data)
  }

  return (
    <DefaultTemplate>
      <h1 className="text-4xl font-bold mt-20">Welcome to Dashboard <span className="text-sky-800">{name}</span></h1>
      <h2 className="text-2xl font-semibold mt-10">Overview Catalog</h2>
      <div className="relative overflow-x-auto mt-5">
        <table className="w-full text-base text-left dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Produk
              </th>
              <th scope="col" className="px-6 py-3">
                Harga
              </th>
              <th scope="col" className="px-6 py-3">
                Status
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
              </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </DefaultTemplate>
  )
}

export default Dashboard
