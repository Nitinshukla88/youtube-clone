import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
        <button className='bg-gray-200 rounded-lg m-2 px-3 py-1'>
            {name}
        </button>
    </div>
  )
}

export default Button