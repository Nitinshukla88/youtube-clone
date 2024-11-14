import React from 'react'

const Comment = ({data}) => {
  return (
    <div className="flex p-3 bg-gray-50 rounded-md my-2">
        <img className="h-12 w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMWBEVm_N2aPSbAbZrY2w5FBCPiv7zOuJ2A&s"/>
        <div className='ml-1'>
            <p className='font-bold'>{data.name}</p>
            <p className='text-sm'>{data.text}</p>
        </div>
    </div>
  )
}

export default Comment