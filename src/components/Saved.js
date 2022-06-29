import { useEffect } from 'react'
import SavedItem from './SavedItem'

const Saved = ({ palettes, setPalettes }) => {
  // Delete button click event
  const handleDelete = e => {
    // Get index stored in dataset
    const index = e.target.dataset.index
    // Get List
    const list = [...palettes]
    // Remove the item from the array
    list.splice(index, 1)
    // Store list
    window.localStorage.setItem('palettes', JSON.stringify(list))
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
            palettes.map((item, index) => {
              return <SavedItem palette={item} key={index} id={index} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Saved
