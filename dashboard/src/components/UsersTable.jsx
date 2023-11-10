import React from 'react'
import DefaultTemplate from '../Templates/DefaultTemplate'
import useFetch from '../custom hooks/useFetch'

const UsersTable = () => {
  const { users } = useFetch()

  return (
    <DefaultTemplate>
      <div className="pt-24">
        <h1 className='text-4xl font-bold mb-6'>User/Admin Page</h1>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">No</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, i) => (
                <tr key={user.id}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {i + 1}
                  </th>
                  <td className="px-6 py-4">
                    {user.name}
                  </td>
                  <td className="px-6 py-4">
                    {user.email}
                  </td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default UsersTable
