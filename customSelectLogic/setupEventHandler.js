
import {
  toggleVisibilityOfNestedOptionList,
  setNestedOptionListVisibility,
} from './visibilityHandling/visibilityHandler.js'
import {
  handleAccessibility
} from './accessibilityHandling/accessibilityHandler.js'
import { updateSelectValue } from './selectionHandling/selectionHandler.js'
import { filterOptionsList } from './utils/filterOptionsList.js'

export { setupCustomSelectInputsEventHandler }

const customSelects = document.querySelectorAll('.custom-select')
const allOptions = document.querySelectorAll('.option')
const customSelectReadWriteInputFields = document.querySelectorAll('input.selected-value:not(:read-only)') // Fetches all custom select input field that are NOT read-only
const expandMoreIcons = document.querySelectorAll('.icon-expand-more')

const setupCustomSelectInputsEventHandler = () => {

  customSelects.forEach(select => {

    select.addEventListener('click', () => {

      const inputContainer = select.parentElement
      toggleVisibilityOfNestedOptionList(inputContainer)
    })

    select.addEventListener('keydown', (e) => {

      const inputContainer = select.parentElement
      setNestedOptionListVisibility(true, inputContainer)
      handleAccessibility(e)
    })
  })

  // When user selects an option, the value of the option gets filled into the input
  allOptions.forEach(option => option.addEventListener('click', updateSelectValue))

  // When user enters a value in the input field, it filters the selectable options in the dropdown list
  customSelectReadWriteInputFields.forEach(selectInputField => {
    selectInputField.addEventListener('input', (e) => filterOptionsList(e.target))
  })

  // Lets the expand more icon open/close the dropdown
  expandMoreIcons.forEach(expandIcon => {

    expandIcon.addEventListener('click', (e) => {

      e.stopPropagation()

      const inputContainer = expandIcon.parentElement.parentElement
      toggleVisibilityOfNestedOptionList(inputContainer)
    })
  })
}
