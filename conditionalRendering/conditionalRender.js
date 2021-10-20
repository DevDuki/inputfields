
import { conditionToRenderResidencePermits } from './nationalitySelectElement/conditions.js'

export { setupConditionalRendering }

const nationalityOptions = document.querySelectorAll('#input-nationality .option')

const setupConditionalRendering = () => {

  // Renders the "residence-permits" select element only if chosen nationality is NOT Switzerland
  nationalityOptions.forEach(nationalityOption => {

    nationalityOption.addEventListener('click', (e) => {

      const selectedOption = e.target

      conditionToRenderResidencePermits(selectedOption)
    })
  })
}
