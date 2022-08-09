export const bodyEmoji = { brain: '🧠', heart: '💜', bones: '️☠', eyes: '👀' }

export const formatQuantity = quantity =>
  quantity > 100 ? '100+' : quantity === 0 ? '-' : quantity

export const options = Object.keys(bodyEmoji).map(option => {
  return bodyEmoji[option] + ' ' + option[0].toUpperCase() + option.substring(1)
})
export const totOptions = options.length
