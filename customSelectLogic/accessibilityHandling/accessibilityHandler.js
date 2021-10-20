
export { handleAccessibility }

const handleAccessibility = (e) => {
  const keyCode = e.keyCode ? e.keyCode : e.which
  const target = e.target // Etiher the whole select element or an option element

  // Keycode 13 is 'ENTER'
  // Lets an option to be chosen via pressing the ENTER button
  if(keyCode === 13) {
    target.click()
  }
}