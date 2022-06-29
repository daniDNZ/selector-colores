import { ReactComponent as Trash } from '../svg/trash.svg'

const SavedItem = ({ palette, id }) => {
  const showPalette = () => {
    // Get circles
    const circlesCollection = document.querySelectorAll('.selector__circle')

    // Get input and set name
    const nameInput = document.querySelector('#paletteName')
    nameInput.value = palette.name

    // Paint circles
    let index = 0
    circlesCollection.forEach(circle => {
      circle.classList.remove('selector__circle--empty')
      circle.style.backgroundColor = palette.colorArray[index]
      index++
    })
  }
  return (
    <>
      <div className='saved-item' onClick={showPalette}>
        <div className='saved-item__header'>
          <span className='saved-item__name'>{palette.name}</span>
          <button className='saved-item__delete' data-index={id}><Trash /></button>
        </div>
        <div className='saved-item__colors'>
          <div className='saved-item__color' style={{ backgroundColor: palette.colorArray[0] }} />
          <div className='saved-item__color' style={{ backgroundColor: palette.colorArray[1] }} />
          <div className='saved-item__color' style={{ backgroundColor: palette.colorArray[2] }} />
          <div className='saved-item__color' style={{ backgroundColor: palette.colorArray[3] }} />
          <div className='saved-item__color' style={{ backgroundColor: palette.colorArray[4] }} />
        </div>
      </div>
    </>
  )
}

export default SavedItem
