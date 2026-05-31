import {ref} from "vue"

const content = ref('')
const width = ref(25)
const height = ref(10)

function reset() {
  let data = ''
  for (let i = 0; i < height.value; i++) {
    for (let j = 0; j < width.value; j++) {
      data += ' '
    }
    if (i < height.value) {
      data += '\n'
    }
  }
  content.value = data
}

export function usePreDoc() {

  return {width, height, content, reset}
}
