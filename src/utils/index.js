export const bodyEmoji = { brain: '🧠', heart: '💜', bones: '️☠', eyes: '👀' }

export const formatQuantity = quantity =>
  quantity > 100 ? '100+' : quantity === 0 ? '-' : quantity
