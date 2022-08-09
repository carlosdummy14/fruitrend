import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.json'

function App() {
  return (
    <div className='bg-zinc-700'>
      <Hero />
      <div className='max-w-5xl mx-auto mt-5 pb-6'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {data.map(card => {
            return <Card key={card.id} {...card} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
