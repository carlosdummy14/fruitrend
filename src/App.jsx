import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  return (
    <div className='bg-white'>
      <Hero />
      <div className='max-w-5xl mx-auto mt-5 mb-20'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
