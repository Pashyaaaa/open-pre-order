import React, { useEffect, useState } from 'react'
import DefaultTemplate from '../Templates/DefaultTemplate'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CatalogList from '../components/CatalogList'

const Catalog = () => {
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
    const response = await  axios.get(`${import.meta.env.VITE_API_URL}/catalog/all`)
    setCatalogs(response.data)
  }

  const deleteCatalog = async (catalogID) => {
    const konfirmasi = confirm('Apakah Anda yakin ingin menghapus catalog ini?')

    if(konfirmasi) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/catalog/${catalogID}`)
        getCatalogs()
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <DefaultTemplate>
      <div className='pt-24'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-4xl font-bold'>Catalog Page</h1>
          <Link to="/catalog/add-catalog" className='button'>Add new catalog</Link>
        </div>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">No</th>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Gambar Produk</th>
                <th scope="col" className="px-6 py-3">Nama Produk</th>
                <th scope="col" className="px-6 py-3">Harga Produk</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Action</th>
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
                <CatalogList sortedCatalogs={sortedCatalogs} deleteCatalog={deleteCatalog} />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default Catalog
