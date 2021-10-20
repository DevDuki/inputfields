
import { checkSelectValidity } from '../validityHandling/validityHandler.js'

export {
  toggleVisibilityOfNestedOptionList,
  setNestedOptionListVisibility,
}

const toggleVisibilityOfNestedOptionList = (inputContainer) => {

  const optionList = inputContainer.querySelector('.option-list')
  optionList.classList.toggle('visible')

  const customSelectElement = inputContainer.querySelector('.custom-select')
  const isExpanded = customSelectElement.dataset.isExpanded
  customSelectElement.dataset.isExpanded = isExpanded === 'false'
    ? 'true'
    : 'false'

  // If the dropdown was expanded before, check the validity of the input
  if(isExpanded === 'true') checkSelectValidity(customSelectElement)
}

const setNestedOptionListVisibility = (setVisible, inputContainer) => {

  const optionList = inputContainer.querySelector('.option-list')
  optionList.classList.addOrRemove = setVisible
    ? optionList.classList.add
    : optionList.classList.remove

  optionList.classList.addOrRemove('visible')

  const customSelectElement = inputContainer.querySelector('.custom-select')
  customSelectElement.dataset.isExpanded = setVisible

  // If the dropdown gets closed, check the validity of the input
  if(!setVisible) checkSelectValidity(customSelectElement)
}