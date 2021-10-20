
import constants from '../../constants.js'

export { filterOptionsList }

const filterOptionsList = (selectInput) => {

  const inputId = selectInput.id

  // Always filter by the initial option list!!
  const initialOptionList = constants.initialOptionListsData[inputId]

  const inputContainer = document.querySelector(`.input-container#input-${inputId}`)
  const optionsList = inputContainer.querySelector('.option-list')

  const filterCriteria = selectInput.value.toLowerCase()
  const filteredOptions = initialOptionList.filter(option => {
    const optionValue = option.innerHTML.toLowerCase()
    return optionValue.includes(filterCriteria)
  })

  optionsList.innerHTML = ''
  filteredOptions.forEach(option => optionsList.appendChild(option))
}