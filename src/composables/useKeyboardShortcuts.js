import { onMounted, onUnmounted } from 'vue'

export function useKeyboardShortcuts(shortcuts = {}) {
  const handleKeydown = (event) => {
    const key = event.key.toLowerCase()
    const combination = []
    if (event.ctrlKey) combination.push('ctrl')
    if (event.shiftKey) combination.push('shift')
    if (event.altKey) combination.push('alt')
    if (event.metaKey) combination.push('meta') // Tecla Windows / Command no Mac

    if (!['control', 'shift', 'alt', 'meta'].includes(key)) {
      combination.push(key)
    }

    const shortcutStr = combination.join('+')

    // console.log(shortcutStr)

    if (shortcuts[shortcutStr]) {
      event.preventDefault()
      shortcuts[shortcutStr](event)
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
}
