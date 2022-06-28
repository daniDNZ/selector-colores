import { ReactComponent as Trash } from '../svg/trash.svg'

const SavedItem = () => {
  return (
    <>
      <div className='saved-item'>
        <div className='saved-item__header'>
          <span className='saved-item__name'>80s vibes</span>
          <button className='saved-item__delete'><Trash /></button>
        </div>
        <div className='saved-item__colors'>
          <div className='saved-item__color' />
          <div className='saved-item__color' />
          <div className='saved-item__color' />
          <div className='saved-item__color' />
          <div className='saved-item__color' />
        </div>
      </div>
    </>
  )
}

export default SavedItem
