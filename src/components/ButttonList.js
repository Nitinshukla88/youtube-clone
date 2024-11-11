import React from 'react'
import Button from './Button'

const ButttonList = () => {

  const buttonItems = ["All", "Music", "Mixes", "Cricket", "Contemporary", "Gaming", "T-series", "News", "Live", "Shark Tank", "CarryMinati", "Linux", "Dogs"]

  return (
    <div className='flex m-2'>
      {buttonItems.map((button, index) => <Button key={index}name={button}/>)}
    </div>
  )
}

export default ButttonList