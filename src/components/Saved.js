import { useEffect } from 'react'
import { deletePalette } from '../utils/ApiFetch'
import SavedItem from './SavedItem'

const Saved = ({ palettes, setPalettes }) => {
  let listKeys = 0
  // Delete button click event
  const handleDelete = e => {
    // Get index stored in dataset
    const index = e.target.dataset.index
    // Remove the item from the array
    const list = palettes.filter(palette => palette.id !== index)
    // Remove from the server
    deletePalette(index)
    // Update state
    setPalettes(list)
  }

  useEffect(() => {
    // Get delete buttons
    const itemsList = document.querySelectorAll('.saved-item__delete')

    // Listeners
    itemsList.forEach(item => {
      item.addEventListener('click', handleDelete)
    })

    return () => {
      itemsList.forEach(item => {
        item.removeEventListener('click', handleDelete)
      })
    }
  }, [palettes])
  return (
    <>
      <div className='saved'>
        <h2 className='saved__title'>Saved palletes</h2>
        <div className='saved__container'>
          {
            palettes.map((item) => {
              listKeys++
              return <SavedItem palette={item} key={listKeys} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Saved
