import { useState } from 'react'
import getPalettes from '../utils/getPalettes'
import Saved from './Saved'
import Selector from './Selector'

const Main = () => {
  // Palletes saved State
  const [palettes, setPalettes] = useState(getPalettes())

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
