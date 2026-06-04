import {ref, computed} from "vue"
import {useCharacters} from "./useCharacters"

const {chars} = useCharacters()

const w = ref(50)
const h = ref(30)
const matrix = ref([])

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

function reset() {
  let idx = 0
  const m = []
  for (let i = 0; i < height.value; i++) {
    const row = []
    for (let j = 0; j < width.value; j++) {
      row.push({char: chars[0], matrixIndex: idx++, rowIndex: i, colIndex: j})
    }
    row.push({char: '\n', matrixIndex: idx++, rowIndex: i})
    m.push(row)
  }
  matrix.value = m
}

function resize() {
  const x0 = width.value
  const x1 = matrix.value[0].length
  const y0 = height.value
  const y1 = matrix.value.length
  const dx = x0 - x1
  const dy = y0 - y1
  
}

const content = computed(() => matrix.value.flat())

export function useDimensions() {
  return {width, height, content, reset, resize}
}
