import {ref} from "vue"

export function useCharacters() {
// TODO https://en.wikipedia.org/wiki/Box-drawing_characters
  const chars = ref([
    '\u2800', '─', '┄', '┅', '╌', '╍', '═', '▀', '▁', '▂', //
    '▃', '▄', '▅', '▆', '▇', '█', '▉', '▊', '▋', '▌', '▍', '▎', '▏', //
    '▐', '▕', '▖', '▗', '▘', '▙', '▚', '▛', '▜', '▝', '▞', '▟', //
    '░', '▒', '▓'
  ])

  return {chars}
}
