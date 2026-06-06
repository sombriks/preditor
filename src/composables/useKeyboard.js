import {onMounted, onUnmounted} from 'vue'

function onKeyEvent(event, shortcut, handler) {
  const handleKeyEvent = e => {
    const combination = []
    const key = e.key.toLowerCase()
    if (e.shiftKey) combination.push('shift')
    if (e.ctrlKey) combination.push('ctrl')
    if (e.metaKey) combination.push('meta')
    if (e.altKey) combination.push('alt')
    if (!combination.length || !['control', 'shift', 'alt', 'meta'].includes(key)) {
      combination.push(key)
    }
    const shortcutStr = combination.join('+')
    if (shortcutStr == shortcut) {
      event.preventDefault?.()
      handler(e)
    }
  }
  onMounted(() => {
    window.addEventListener(event, handleKeyEvent)
  })
  onUnmounted(() => {
    window.removeEventListener(event, handleKeyEvent)
  })
}

function onKeyDown(shortcut, handler) {
  onKeyEvent('keydown', shortcut, handler)
}

function onKeyUp(shortcut, handler) {
  onKeyEvent('keyup', shortcut, handler)
}

export function useKeyboard() {
  return {onKeyDown, onKeyUp}
}
