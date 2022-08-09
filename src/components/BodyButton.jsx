import { useState } from 'react'
import { bodyEmoji, formatQuantity } from '../utils'

const BodyButton = ({ part }) => {
  const [quantity, setQuantity] = useState(0)

  const updateQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  return (
    <button
      className='flex flex-col items-center p-1 rounded-md  w-11 text-gray-900 hover:bg-black hover:text-gray-300 transition-colors duration-500'
      onClick={updateQuantity}
    >
      {bodyEmoji[part]}
      <span className='text-sm'>{formatQuantity(quantity)}</span>
    </button>
  )
}

export default BodyButton
