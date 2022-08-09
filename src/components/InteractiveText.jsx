import { useEffect, useState } from 'react'
import { options, totOptions } from '../utils'

const InteractiveText = () => {
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

  return <span>{options[option]}</span>
}

export default InteractiveText
