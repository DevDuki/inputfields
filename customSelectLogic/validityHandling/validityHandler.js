
import constants from '../../constants.js'

export { checkSelectValidity }



// Handle missing input and done states
const checkSelectValidity = (selectElement) => {

  const selectValueElement = selectElement.querySelector('.selected-value')
  const inputContainer = selectElement.parentElement
  const notificationElement = inputContainer.querySelector('.notification')
  const selectInputField = inputContainer.querySelector('input')

  const hasChosen = selectValueElement.value != ''
  selectElement.dataset.hasValue = hasChosen
    ? 'true'
    : 'false'

  if(!hasChosen) {
    notificationElement.textContent = constants.MELDUNG_BITTE_ERGAENZEN
    selectElement.classList.remove('invalid-input')
    return
  }

  if(hasChosen && !selectInputField.readOnly) {

    const valueExistsAsOption = checkSelectionExists(selectValueElement)

    if(!valueExistsAsOption){
      notificationElement.textContent = constants.MELDUNG_EINGABE_NICHT_VERFUEGBAR
      selectElement.classList.add('invalid-input')
      return
    }
  }

  selectElement.classList.remove('invalid-input')
}

const checkSelectionExists = (selectValueElement) => {

  const initialOptions = constants.initialOptionListsData[selectValueElement.id]

  const value = selectValueElement.value.toLowerCase()

  const valueExistsAsOption = initialOptions.some(option =>
    option.innerHTML.toLowerCase() === value
  )

  return valueExistsAsOption
}
