
import { filterOptionsList } from '../utils/filterOptionsList.js'

export { updateSelectValue }

const updateSelectValue = (e) => {

  const selectedOption = e.currentTarget
  const customSelect = selectedOption.parentElement.parentElement
  const selectValueElement = customSelect.querySelector('input.selected-value')

  selectValueElement.value = selectedOption.innerHTML
  // Filter the option list again manually for non readonly select elements, after an option has been selected
  if(!selectValueElement.readOnly) filterOptionsList(selectValueElement)
}