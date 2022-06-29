import { useEffect, useState } from 'react'
import { getPalettes } from '../utils/ApiFetch'
import Saved from './Saved'
import Selector from './Selector'

const Main = () => {
  const [loading, setLoading] = useState(true)
  // Palletes saved State
  const [palettes, setPalettes] = useState()

  useEffect(() => {
    // Set palettes and remove loading
    const getData = (data) => {
      setPalettes(data)
      setLoading(false)
    }
    // Fetch data
    getPalettes(getData)
  }, [])

  if (loading) {
    return (
      <>
        <main className='main'>
          <Selector palettes={palettes} setPalettes={setPalettes} />
        </main>
      </>
    )
  }
  return (
    <>
      <main className='main'>
        <Selector palettes={palettes} setPalettes={setPalettes} />
        <Saved palettes={palettes} setPalettes={setPalettes} />
      </main>
    </>
  )
}

export default Main
