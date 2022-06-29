// import { useEffect } from 'react'
import { ReactComponent as Trash } from '../svg/trash.svg'

const SavedItem = ({ palette }) => {
  const showPalette = e => {
    if (!e.target.classList.contains('saved-item__delete')) {
      // Get circles
      const circlesCollection = document.querySelectorAll('.selector__circle')

      // Get input and set name
      const nameInput = document.querySelector('#paletteName')
      nameInput.value = palette.name

      // Paint circles
      let index = 0
      circlesCollection.forEach(circle => {
        circle.classList.remove('selector__circle--empty')
        circle.style.backgroundColor = palette.arrayColors[index]
        index++
      })
    }
  }
  return (
    <>
      <div className='saved-item' onClick={showPalette} id={palette.id}>
        <div className='saved-item__header'>
          <span className='saved-item__name'>{palette.name}</span>
          <button className='saved-item__delete' data-index={palette.id}><Trash /></button>
        </div>
        <div className='saved-item__colors'>
          <div className='saved-item__color' style={{ backgroundColor: palette.arrayColors[0] }} />
          <div className='saved-item__color' style={{ backgroundColor: palette.arrayColors[1] }} />
          <div className='saved-item__color' style={{ backgroundColor: palette.arrayColors[2] }} />
          <div className='saved-item__color' style={{ backgroundColor: palette.arrayColors[3] }} />
          <div className='saved-item__color' style={{ backgroundColor: palette.arrayColors[4] }} />
        </div>
      </div>
    </>
  )
}

export default SavedItem
