import { useEffect } from 'react'
import { CompactPicker } from 'react-color'
import getPalettes from '../utils/getPalettes'

const Selector = ({ palettes, setPalettes }) => {
// Active the focus circle
  const focusCircle = e => {
    // Remove previous active circle
    const circlesCollection = document.querySelectorAll('.selector__circle')
    circlesCollection.forEach(element => {
      element.classList.remove('selector__circle--active')
    })
    // Change the class from empty to active
    const circle = e.target
    circle.classList.remove('selector__circle--empty')
    circle.classList.add('selector__circle--active')

    // Set default color if backgroundColor is empty
    if (circle.style.backgroundColor === '') circle.style.backgroundColor = '#fae8b6'
  }

  // Catch the selected color and set the backgroundcolor of the active circle
  const handleChangeComplete = (color, event) => {
    const circleActive = document.querySelector('.selector__circle--active')
    if (circleActive) { circleActive.style.backgroundColor = color.hex }
  }

  // Active the alert
  const activeAlert = (text) => {
    const spanAlert = document.querySelector('.selector__alert')
    spanAlert.textContent = text

    // Display de alert
    spanAlert.classList.add('selector__alert--visible')

    // Hide the alert after 2s
    setTimeout(function () {
      spanAlert.classList.remove('selector__alert--visible')
    }, 2000)
  }

  // Save button event
  const handleSave = () => {
    // Get input
    const nameInput = document.querySelector('#paletteName')

    // Save if the input is not empty and there are less than 8 entries
    if (nameInput.value === '') {
      activeAlert('Nombre vacío')
    } else if (getPalettes().length >= 8) {
      activeAlert('Máx. 8 favoritos')
    } else {
      const circlesCollection = document.querySelectorAll('.selector__circle')
      let colorArray = []
      let newPalettes = []

      // Add all colors to array
      circlesCollection.forEach(element => {
        colorArray = [...colorArray, element.style.backgroundColor]
        // Reset circles
        element.style.backgroundColor = ''
        element.classList.add('selector__circle--empty')
      })

      // Set pallettes with the new one
      newPalettes = [...palettes, { name: nameInput.value, colorArray }]
      setPalettes(newPalettes)

      // Save colors
      window.localStorage.setItem('palettes', JSON.stringify(newPalettes))

      // Clean input
      nameInput.value = ''
    }
  }

  useEffect(() => {
    // Listeners
    const circlesCollection = document.querySelectorAll('.selector__circle')
    circlesCollection.forEach(element => {
      element.addEventListener('click', focusCircle)
    })

    return () => {
      circlesCollection.forEach(element => {
        element.removeEventListener('click', focusCircle)
      })
    }
  })
  return (
    <div className='selector'>
      <div className='selector__circles'>
        <div className='selector__circle selector__circle--empty' />
        <div className='selector__circle selector__circle--empty' />
        <div className='selector__circle selector__circle--empty' />
        <div className='selector__circle selector__circle--empty' />
        <div className='selector__circle selector__circle--empty' />
      </div>
      <div className='selector__main'>
        <div className='selector__palette'>
          <CompactPicker onChangeComplete={handleChangeComplete} />
        </div>
        <div className='selector__saving'>
          <label htmlFor='colorName' className='selector__label'>Name</label>
          <div className='selector__input-group'>
            <input type='text' id='paletteName' className='selector__input' placeholder='Website color scheme' />
            <button className='selector__button' onClick={handleSave} />
          </div>
          <span className='selector__alert'>Máx. 8 favoritos</span>
        </div>
      </div>
    </div>
  )
}

export default Selector
