
import constants from '../constants.js'

export { handleInvalidDateInput }

const handleInvalidDateInput = (dateInputField, notificationElement) => {

  const userDate = dateInputField.value
  const userDateObj = new Date(userDate)

  const currentDateTime = new Date()

  if(userDateObj > currentDateTime) {
    dateInputField.classList.add('invalid-input')
    notificationElement.textContent = constants.MELDUNG_DATUM_IN_ZUKUNFT
  }
}