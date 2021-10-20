
import constants from '../constants.js'

export { handleInvalidInput }

const handleInvalidInput = (inputToCheck, notificationElement) => {

  const inputValue = inputToCheck.value
  const isValid = inputToCheck.checkValidity()
  if(!isValid && inputValue) {
    inputToCheck.classList.add('invalid-input')
    notificationElement.textContent = constants.MELDUNG_NUR_ALPHABETISCHE_EINGABE
  } else {
    inputToCheck.classList.remove('invalid-input')
  }
}