import { CompactPicker } from 'react-color'

const Selector = () => {
  return (
    <div className='selector'>
      <div className='selector__circles'>
        <div className='selector__circle selector__circle--empty' />
        <div className='selector__circle selector__circle--empty' />
        <div className='selector__circle selector__circle--active' />
        <div className='selector__circle selector__circle--empty' />
        <div className='selector__circle selector__circle--empty' />
      </div>
      <div className='selector__main'>
        <div className='selector__palette'>
          <CompactPicker />
        </div>
        <div className='selector__saving'>
          <label htmlFor='colorName' className='selector__label'>Name</label>
          <div className='selector__input-group'>
            <input type='text' id='colorName' className='selector__input' placeholder='Website color scheme' />
            <button className='selector__button' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Selector
