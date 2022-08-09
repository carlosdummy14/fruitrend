import BodyButton from './BodyButton'

const Card = ({ name, image, text }) => {
  return (
    <div className='w-56 h-full min-h-full border border-solid border-gray-900 rounded-md bg-gray-50 m-auto p-3 flex flex-col'>
      <div className='font-bold uppercase '>{name}</div>

      <div className='w-full flex justify-center' style={{ minHeight: '160px' }}>
        <img src={image} alt={name} className='w-40 max-h-40 min-h-40  rounded-md' />
      </div>

      <div className='text-sm mt-3 h-3/4'>{text}</div>

      <div className='flex justify-around'>
        <BodyButton part='brain' />
        <BodyButton part='heart' />
        <BodyButton part='bones' />
        <BodyButton part='eyes' />
      </div>
    </div>
  )
}

export default Card
