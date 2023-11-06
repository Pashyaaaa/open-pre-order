import React from 'react'
import { Link } from 'react-router-dom'

const CatalogList = ({ sortedCatalogs, deleteCatalog }) => {
  return (
    <>
      {
        sortedCatalogs.map((catalog, i) => (
          <tr key={catalog.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {i + 1}
            </th>
            <td className="px-6 py-4">
              {catalog.id}
            </td>
            <td className="px-6 py-4">
              <img className={`max-w-lg rounded-lg w-32 h-36 object-cover ${catalog.publish ? '' : 'grayscale'}`} src={catalog.url} alt="Image Product" />
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
    </>
  )
}

export default CatalogList
