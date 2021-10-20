
import constants from '../../constants.js'

export { conditionToRenderResidencePermits }

const conditionToRenderResidencePermits = (selectedOption) => {

  const value = selectedOption.dataset.value
  const residencePermitsInputContainer = document.querySelector('#input-residence-permits') //! Might require a more general approach

  residencePermitsInputContainer.style.display = value === constants.SCHWEIZ
    ? 'none'
    : 'flex'
}