
// Handle the missing input state
const inputFields = document.querySelectorAll('input')

inputFields.forEach(inputField => {

  inputField.addEventListener('blur', (e) => {

    const inputToCheck = e.currentTarget

    const inputValue = inputToCheck.value

    if(inputValue === '') {
      inputToCheck.classList.add('missing-input')
    } else {
      inputToCheck.classList.remove('missing-input')
    }
  })
})



// Dropdown and Custom Select element functionality

// Handle the dropdown menu visibility for all custom selects
const customSelects = document.querySelectorAll('.custom-select')
const selectLabels = document.querySelectorAll('label[for="custom-select"]')

const toggleVisibilityOfNestedOptionList = (e) => {
  const targetElement = e.currentTarget
  const inputContainer = targetElement.parentElement

  const optionList = inputContainer.querySelector('.option-list')
  optionList.classList.toggle('visible')

  const customSelectElement = inputContainer.querySelector('.custom-select')
  const isExpanded = customSelectElement.dataset.isExpanded
  customSelectElement.dataset.isExpanded = isExpanded === 'false'
    ? 'true'
    : 'false'

  if(isExpanded === 'true') checkValidity(customSelectElement)
}

selectLabels.forEach(label =>
  label.addEventListener('click', toggleVisibilityOfNestedOptionList)
)

customSelects.forEach(select =>
  select.addEventListener('click', toggleVisibilityOfNestedOptionList)
)

// Handle dropdown selection
const allOptions = document.querySelectorAll('.option')

const updateSelectValue = (e) => {

  const selectedOption = e.currentTarget
  const customSelect = selectedOption.parentElement.parentElement
  const selectValueElement = customSelect.querySelector('span.selected-value')

  selectValueElement.textContent = selectedOption.innerHTML
}

allOptions.forEach(option => option.addEventListener('click', updateSelectValue))

// Handle missing input and done states
const checkValidity = (selectElement) => {

  const selectValueElement = selectElement.querySelector('.selected-value')

  const hasChosen = selectValueElement.innerHTML != ''
  selectElement.dataset.isValid = hasChosen
    ? 'true'
    : 'false'

  const inputContainer = selectElement.parentElement

  const expandMoreIcon = selectElement.querySelector('.icon-expand-more')
  console.log(expandMoreIcon)
  expandMoreIcon.style.visibility = hasChosen
    ? 'hidden'
    : 'visible'

  const doneIcon = inputContainer.querySelector('.icon-done')
  doneIcon.style.visibility = hasChosen
    ? 'visible'
    : 'hidden'

}