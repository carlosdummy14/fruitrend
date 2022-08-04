import { useState } from 'react'
import BodyButton from './BodyButton'

const Card = ({ name, image, text }) => {
  const [partOfBody, setPartOfBody] = useState({
    brain: 0,
    heart: 0,
    bones: 0,
    eyes: 0,
  })

  const handleClickOfBodyPart = part => {
    setPartOfBody(prevBody => ({
      ...prevBody,
      [part]: prevBody[part] + 1,
    }))
  }

  return (
    <div className='w-56 border border-solid border-gray-900 rounded-md bg-gray-50 m-auto p-3'>
      <div className='font-bold uppercase '>Banana</div>

      <div className='w-full flex justify-center'>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F34500000%2FBanana-3-bananas-34512789-1000-1000.jpg&f=1&nofb=1'
          alt='fuit'
          className='w-40 max-h-40  rounded-md'
        />
      </div>

      <div className='text-sm mt-3 h-3/4'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio officiis illo, ut fuga
        commodi magnam
      </div>

      <div className='flex justify-around'>
        {Object.keys(partOfBody).map(part => (
          <BodyButton
            key={part}
            handleClick={handleClickOfBodyPart}
            quantity={partOfBody[part]}
            part={part}
          />
        ))}
      </div>
    </div>
  )
}

export default Card
