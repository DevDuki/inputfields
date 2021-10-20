
import { handleInvalidDateInput } from './handleInvalidDateInput.js'

export { checkDateInputValidity }

const checkDateInputValidity = (e) => {

  const dateInputField = e.currentTarget
  const inputContainer = dateInputField.parentElement
  const notificationElement = inputContainer.querySelector('.notification')

  handleInvalidDateInput(dateInputField, notificationElement)
}