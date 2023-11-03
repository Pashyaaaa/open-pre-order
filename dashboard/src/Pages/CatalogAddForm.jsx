import React, { useState } from 'react'
import DefaultTemplate from '../Templates/DefaultTemplate'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CatalogAddForm = () => {
  const navigate = useNavigate()
  const [nama_produk, setNama_Produk] = useState('')
  const [harga, setHarga] = useState('')
  const [file, setFile] = useState('')
  const [previewImg, setPreviewImg] = useState('')
  const [publish, setPublish] = useState(1)

  const loadImage = e => {
    const image = e.target.files[0]
    setFile(image)
    setPreviewImg(URL.createObjectURL(image))
  }

  const saveCatalog = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('nama_produk', nama_produk)
    formData.append('harga', harga)
    formData.append('publish', publish)
    formData.append('file', file)

    try {
      await axios.post('http://localhost:5000/catalog', formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      })
      navigate('/catalog')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DefaultTemplate>
      <div className='pt-20 max-w-xl mx-auto'>
        <h1 className='text-4xl font-semibold mb-5'>Add Catalog</h1>
        <form onSubmit={saveCatalog} className='mx-auto'>
          <div className="mb-6">
            <label
              htmlFor="nama_produk"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
              Nama Produk
            </label>
            <input
              type="text"
              id="nama_produk"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={nama_produk}
              onChange={e => setNama_Produk(e.target.value)} />
          </div>
          <div className="mb-6">
            <label
              htmlFor="harga"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
              Harga Produk
              </label>
            <input
              type="number"
              id="harga"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={harga}
              onChange={e => setHarga(e.target.value)} />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input">
              Upload file
            </label>
            {previewImg ? (<img className="h-auto max-w-lg rounded-lg mb-6 w-40" src={previewImg} alt="Preview Image Product" />) : ''}
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              onChange={loadImage} />
          </div>
          <div className="mb-6 flex gap-x-5">
            <div className="flex items-center">
              <input
                id="published"
                type="radio"
                value='1'
                name='status'
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={e => setPublish(e.target.value)} />
              <label
                htmlFor="published"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Publish
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="unpublished"
                type="radio"
                value='0'
                name='status'
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={e => setPublish(e.target.value)} />
              <label
                htmlFor="unpublished"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Unpublish
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </form>
      </div>
    </DefaultTemplate>
  )
}

export default CatalogAddForm
