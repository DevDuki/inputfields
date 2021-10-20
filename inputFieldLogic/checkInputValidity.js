
import { handleMissingInput } from './handleMissingInput.js'
import { handleInvalidInput } from './handleInvalidInput.js'

export { checkInputValidity }

const checkInputValidity = (e) => {

  const inputToCheck = e.currentTarget

  const inputId = inputToCheck.id
  const inputContainer = document.querySelector(`.input-container#input-${inputId}`)
  const notificationElement = inputContainer.querySelector('.notification')

  handleMissingInput(inputToCheck, notificationElement)
  handleInvalidInput(inputToCheck, notificationElement)
}
