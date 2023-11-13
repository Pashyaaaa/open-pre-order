import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/datepicker.min.js'

const FormUser = () => {
  const navigate = useNavigate()

  return (
    <div className='pt-5 pb-10'>
      <h2 className="font-bold text-2xl text-green-900 ms:text-xl">
        Form Order
      </h2>
      <form className='mt-8'>
        <div className="mb-6">
          <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
          <input type="text" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="noTel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Whatsapp</label>
          <input type="tel" id="noTel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
          <input type="text" id="alamat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Pengambilan</label>
          <input type="datetime-local" name="" id="" />
        </div>
        <button type="submit" className="mt-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
        <button className="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-2" name="Konfirmasi" aria-label="Konfirmasi Pesananan" onClick={() => {
          navigate(-1)
        }}>Batalkan Pesananan</button>
      </form>
      {/* <form className='mt-6'>
        <div className="mb-6">
          <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Anda</label>
          <input type="nama" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="John Doe" required />
        </div>
        <div className="mb-6">
          <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat Anda</label>
          <input type="text" id="alamat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="JL. Raya Indah" required />
        </div>
        <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Pesan Sekarang</button>
        <button className="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-2" name="Konfirmasi" aria-label="Konfirmasi Pesananan" onClick={() => {
          navigate(-1)
        }}>Batalkan Pesananan</button>
      </form> */}
    </div>
  )
}

export default FormUser
