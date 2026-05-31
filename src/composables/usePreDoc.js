import {ref} from "vue"

const content = ref('')
const width = ref(80)
const height = ref(25)

function reset() {
  let data = ''
  for (let i = 0; i < height.value; i++) {
    for (let j = 0; j < width.value; j++) {
      data += ' '
    }
    if (i < height.value - 1) {
      data += '\n'
    }
  }
  content.value = data
}

export function usePreDoc() {

  return {width, height, content, reset}
}
