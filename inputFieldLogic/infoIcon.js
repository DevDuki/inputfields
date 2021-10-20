
export { toggleTooltip }

const toggleTooltip = (infoIcon) => {
  const tooltip = infoIcon.querySelector('.tooltip')
  tooltip.classList.toggle('visible')
}