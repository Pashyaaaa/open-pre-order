import DefaultTemplate from '../Templates/DefaultTemplate'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import useGetCatalog from '../custom hooks/useGetCatalog'

const API_URL = 'http://localhost:5000/catalog'

const CatalogForm = () => {
  const { id } = useParams()
  const { catalog, setCatalog } = useGetCatalog(id)
  const navigate = useNavigate()

  const published = 1, unpublised = 0

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(id === 'add-catalog') {
        await axios.post(API_URL, catalog)
        return navigate('/catalog')
      } else {
        await axios.patch(`${API_URL}/${id}`, catalog)
        return navigate('/catalog')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DefaultTemplate>
      <form onSubmit={ handleSubmit } className='mt-20 max-w-lg mx-auto'>
        <h1 className='font-bold text-2xl mb-5'>Ubah Menu Makanan</h1>
        <div className="mb-6">
          <label htmlFor="nama_produk" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama produk</label>
          <input
            type="text"
            id="nama_produk"
            name='nama_produk'
            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama produk makanan"
            required
            value={catalog.nama_produk}
            onChange={e => setCatalog({
              ...catalog,
              nama_produk: e.target.value
            })} />
        </div>
        <div className="mb-6">
          <label htmlFor="harga" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harga produk</label>
          <input
            type='number'
            id="harga"
            name='harga'
            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Harga produk makanan"
            required
            value={catalog.harga}
            onChange={e => setCatalog({
              ...catalog,
              harga: e.target.value
            })} />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="gambar">Upload file</label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-400 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="gambar"
            id="gambar"
            type="file"
            accept='assets/*'
            onChange={e => {
              setCatalog({
                ...catalog,
                gambar: e.target.files[0].name
              })
            }} />
        </div>
        <div className="mb-6 flex gap-x-6">
        <div className="flex items-center mb-4">
          <input
            id="status-published"
            type="radio"
            name="status"
            value={published}
            className="w-4 h-4 border-gray-400 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            onChange={e => {
              setCatalog({
                ...catalog,
                publish: e.target.value
              })
            }} />
          <label
            htmlFor="status-published"
            className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Publish
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="status-unpublised"
            type="radio"
            name="status"
            value={unpublised}
            className="w-4 h-4 border-gray-400 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            onChange={e => {
              setCatalog({
                ...catalog,
                publish: e.target.value
              })
            }} />
          <label
            htmlFor="status-unpublised"
            className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Unpublish
          </label>
        </div>
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{ id === 'add-catalog' ? 'Tambah Produk' : 'Edit Produk' }</button>
      </form>
    </DefaultTemplate>
  )
}

export default CatalogForm
