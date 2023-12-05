import axios from "axios"
import DefaultTemplate from "../Templates/DefaultTemplate"
import { useEffect, useState } from "react"
import useFetch from '../custom hooks/useFetch'
import CatalogDashList from "../components/CatalogDashList"

const Dashboard = () => {
  const { name } = useFetch()
  const [catalogs, setCatalogs] = useState([])

  const sortedCatalogs = [...catalogs].sort((a, b) => {
    // Urutkan berdasarkan nilai publish terlebih dahulu
    if (a.publish < b.publish) return 1;
    if (a.publish > b.publish) return -1;
  
    // Jika nilai publish sama, urutkan berdasarkan ID (atau kunci lain jika diperlukan)
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
  
    return 0; // Jika publish dan ID sama
  });

  useEffect(() => {
    getCatalogs()
  }, [])

  const getCatalogs = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/catalog/all`)
    setCatalogs(response.data)
  }

  return (
    <DefaultTemplate>
      <div className="pt-24">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dashboard <span className="text-sky-800">{name}</span></h1>
        <h2 className="text-2xl font-semibold">Overview Catalog</h2>
        <div className="relative overflow-x-auto mt-5">
          <table>
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">No</th>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Nama Produk</th>
                <th scope="col" className="px-6 py-3">Harga</th>
                <th scope="col" className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedCatalogs.length === 0 ? (
                <tr>
                  <td className='text-center text-3xl font-semibold p-20' colSpan={7}>
                    Belum ada catalog yang tersedia
                  </td>
                </tr>
              ) : (
                <CatalogDashList sortedCatalogs={sortedCatalogs} />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default Dashboard
