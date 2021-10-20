
import constants from '../constants.js'

export { handleMissingInput }

const handleMissingInput = (inputToCheck, notificationElement) => {

  const inputValue = inputToCheck.value
  if(inputValue === '') {
    inputToCheck.classList.add('missing-input')
    notificationElement.textContent = constants.MELDUNG_BITTE_ERGAENZEN
  } else {
    inputToCheck.classList.remove('missing-input')
  }
}