import DefaultTemplate from "../Templates/DefaultTemplate"
import useFetch from "../custom hooks/useFetch"
import useGetCatalog from "../custom hooks/useGetCatalog"

const Dashboard = () => {
  const { name } = useFetch()
  const { catalogs } = useGetCatalog()

  return (
    <DefaultTemplate>
      <h1 className="text-2xl font-bold mt-20">Welcome to Dashboard <span className="text-sky-500">{name}</span></h1>
      <div className="relative overflow-x-auto mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                Publish
              </th>
            </tr>
          </thead>
          <tbody>
            {
              catalogs.map((item, i) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {i + 1}
                </th>
                <td className="px-6 py-4">
                  {item.id}
                </td>
                <td className="px-6 py-4">
                  {item.nama_produk}
                </td>
                <td className="px-6 py-4">
                  Rp {item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </td>
                <td className="px-6 py-4">
                  <button type="button" className="text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Publish</button>
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
