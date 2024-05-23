import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='w-1/2 m-auto mt-10 flex flex-col'>
        <h1 className='text-3xl text-gray-300 mb-5'>User</h1>
        <Link to={"/user/Elina"} className='w-2/12 p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400'>Elina</Link>
        <Link to={"/user/Papuni"} className='w-2/12 p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400'>Papuni</Link>
        <Link to={"/user/Krishna"} className='w-2/12 p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400'>Krishna</Link>
        <button className='mb-2 w-2/12 px-3 py-1 bg-blue-500 rounded-md cursor-pointer text-sm text-white'>See Details</button>

        <hr />
        <Outlet />
    </div>
  )
}

export default User