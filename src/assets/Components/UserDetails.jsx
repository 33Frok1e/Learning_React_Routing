import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {

    // const {d} = useParams();
    // console.log(d);
    const {name} = useParams();
    const navigate = useNavigate();
    const GoBackHandler = ()=>{
        navigate(-1);
    }

  return (
    // Child Route
    <div className='w-1/2 m-auto mt-10'>
        <h1 className='text-3xl text-gray-300 mb-5'>User Details</h1>
        <h1>Hi! {name}</h1>
        <button onClick={GoBackHandler} className='px-3 py-2 bg-blue-500 rounded-md cursor-pointer text-sm text-white'>Go Back</button>
    </div>
  )
}

export default UserDetails