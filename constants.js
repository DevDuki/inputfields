
const MELDUNG_NUR_ALPHABETISCHE_EINGABE = 'Nur alphabetische Eingabe möglich'
const MELDUNG_NUR_NUMERISCHE_EINGABE = 'Nur numerische Eingabe möglich'
const MELDUNG_BITTE_ERGAENZEN = 'Bitte ergänzen'
const MELDUNG_DATUM_IN_ZUKUNFT = 'Datum kann nicht in der Zukunft sein'
const MELDUNG_EINGABE_NICHT_VERFUEGBAR = 'Diese Eingabe steht nicht zur Auswahl'

const SCHWEIZ = 'CH'

// Fetches the initially loaded option list at the first page load (via IIFE) to keep them persistant
const initialOptionListsData = {}
;(() => { // Semi-colon at the start of this line is mandatory
  const customSelectReadWriteInputFields = document.querySelectorAll('input.selected-value:not(:read-only)')

  customSelectReadWriteInputFields.forEach(selectInput => {
    const inputId = selectInput.id

    const inputContainer = document.querySelector(`.input-container#input-${inputId}`)
    const options = Array.from(inputContainer.querySelectorAll('.option'))

    initialOptionListsData[inputId] = options
  })
})()

export default {
  MELDUNG_NUR_ALPHABETISCHE_EINGABE,
  MELDUNG_NUR_NUMERISCHE_EINGABE,
  MELDUNG_BITTE_ERGAENZEN,
  MELDUNG_DATUM_IN_ZUKUNFT,
  MELDUNG_EINGABE_NICHT_VERFUEGBAR,
  SCHWEIZ,
  initialOptionListsData
}