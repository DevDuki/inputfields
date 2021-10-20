
import { setupInputFieldsEventHandler } from './inputFieldLogic/setupEventHandler.js'
import { setupDateInputsEvenHandler } from './dateInputLogic/setupEventHandler.js'
import { setupCustomSelectInputsEventHandler } from './customSelectLogic/setupEventHandler.js'
import { setupConditionalRendering } from './conditionalRendering/conditionalRender.js'

// General Input functionality
setupInputFieldsEventHandler()

// Date Input functionality
setupDateInputsEvenHandler()

// Custom Select functionality
setupCustomSelectInputsEventHandler()

// Conditional Rendering of certain Elements
setupConditionalRendering()
