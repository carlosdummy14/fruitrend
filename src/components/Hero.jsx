import { useEffect, useState } from 'react'

const options = ['🧠 Brain', '💜 Heart', '☠️ Bones', '️‍👀 Eyes']
const totOptions = options.length

const Hero = () => {
  const [option, setOption] = useState(0)

  useEffect(() => {
    const optionCounter = setTimeout(() => {
      if (option >= totOptions - 1) {
        setOption(0)
      } else {
        setOption(prevOption => prevOption + 1)
      }
    }, 2000)

    return () => {
      clearInterval(optionCounter)
    }
  }, [option])

  return (
    <div className='max-w-9xl mx-auto h-screen text-violet-400 text-5xl relative flex items-center'>
      <img
        src='https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg'
        alt='fruits'
        className='absolute w-full h-full'
      />
      <div className='absolute w-full h-full bg-gradient-to-r from-black  '></div>
      <div className='absolute w-full h-full flex items-center  '>
        <div className='  w-2/4 p-3'>
          <h1>
            Witch fuit is better for your <span className=''>{options[option]}?</span>
          </h1>
        </div>
        <div className=' w-full h-full'>Cards</div>
      </div>
    </div>
  )
}

export default Hero
