import {computed, ref} from "vue"

const brush = ref('\u2800')
const preMatrix = ref([])
const w = ref(25)
const h = ref(10)

const width = computed({
  get: () => w.value,
  set: (value) => {
    if (value < 10) value = 10
    if (value > 1000) value = 1000
    w.value = value
  }
})

const height = computed({
  get: () => h.value,
  set: (value) => {
    if (value < 10) value = 10
    if (value > 1000) value = 1000
    h.value = value
  }
})

const content = computed(() =>
  preMatrix.value
    .map(row => row
      .map(cell => cell.char)
      .join(''))
    .join('\n'))

function reset() {
  let idx = 0
  const matrix = []
  for (let i = 0; i < height.value; i++) {
    const row = []
    for (let j = 0; j < width.value; j++) {
      row.push({char: brush.value, index: idx++})
    }
    idx++
    matrix.push(row)
  }
  preMatrix.value = matrix
}

function paint(char, index) {
  const cell = preMatrix.value.flat().find(cell => cell.index === index)
  if (cell) {
    cell.char = char
  }
}

export function usePreDoc() {
  return {brush, content, width, height, reset, paint}
}
