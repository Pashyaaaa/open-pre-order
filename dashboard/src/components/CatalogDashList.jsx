import React from 'react'

const CatalogDashList = ({ sortedCatalogs }) => {
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
    </>
  )
}

export default CatalogDashList
