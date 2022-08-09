import InteractiveText from './InteractiveText'

const Hero = () => {
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
            Witch fuit is better for your <InteractiveText />?
          </h1>
        </div>
        <div className=' w-full h-full'></div>
      </div>
    </div>
  )
}

export default Hero
