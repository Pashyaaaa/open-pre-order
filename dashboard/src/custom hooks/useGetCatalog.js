import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API_URL = 'http://localhost:5000/catalog'

const useGetCatalog = (id) => {
  const [catalogs, setCatalogs] = useState([])
  const [catalog, setCatalog] = useState({
    nama_produk: '',
    gambar: '',
    harga: '',
    publish: 1
  })

  useEffect(() => {
    if(id === 'add-catalog') return
    const fetchCatalog = async () => {
      const catalogsData = await axios.get(API_URL)
      const catalogData = await axios.get(`${API_URL}/${id}`)
      setCatalogs(catalogsData.data)
      setCatalog(catalogData.data)
    }
    fetchCatalog()
  }, [])

  return { catalogs, catalog, setCatalogs, setCatalog }
}

export default useGetCatalog