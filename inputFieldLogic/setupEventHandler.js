

import { checkInputValidity } from './checkInputValidity.js'
import { toggleTooltip } from './infoIcon.js'

export { setupInputFieldsEventHandler }

// Handle the missing & invalid input state
const inputFields = document.querySelectorAll('input')
const infoIcons = document.querySelectorAll('.info-container')

const setupInputFieldsEventHandler = () => {

  inputFields.forEach(inputField => {
    inputField.addEventListener('blur', checkInputValidity)
  })

  infoIcons.forEach(infoIcon => {
    infoIcon.addEventListener('click', (e) => {

      // Prevents focusing the input field when clicking the info icon, despite it being inside the label tag
      e.preventDefault()

      const clickedInfoIcon = e.currentTarget
      toggleTooltip(clickedInfoIcon)
    })
  })
}