
import { checkDateInputValidity } from './checkDateInputValidity.js'

export { setupDateInputsEvenHandler }

const dateInputFields = document.querySelectorAll('input[type="date"]')
const dateInputsWithoutDatePicker = document.querySelectorAll('input[type="date"].no-date-picker')

const setupDateInputsEvenHandler = () => {

  dateInputFields.forEach(dateInputField => {
    dateInputField.addEventListener('blur', checkDateInputValidity)
  })

  // Prevents the datepicker from showing up
  dateInputsWithoutDatePicker.forEach(dateInput => {
    dateInput.addEventListener('click', preventDatePickerPopup)
  })
}

// Callback fn for preventing datepicker
const preventDatePickerPopup = (e) => {
  e.preventDefault()
}