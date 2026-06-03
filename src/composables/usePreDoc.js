import {computed, ref} from "vue"
import {useCharacters} from "./useCharacters"
import {useDimensions} from "./useDimensions"

const {width, height} = useDimensions()
const {chars} = useCharacters()

const brush = ref(chars[0])
const matrix = ref([])

const content = computed(() => matrix.value.flat())

function reset() {
  let idx = 0
  const m = []
  for (let i = 0; i < height.value; i++) {
    const row = []
    for (let j = 0; j < width.value; j++) {
      row.push({char: chars[0], matrixIndex: idx++, rowIndex: i, colIndex: j})
    }
    row.push({char: '\n', matrixIndex: idx++})
    m.push(row)
  }
  matrix.value = m
}

function paint(char, data) {
  if (!data || !data.matrixIndex) {
    return
  }
  const cell = content.value.find(cell => cell.matrixIndex == data.matrixIndex)
  if (cell && cell.char !== '\n') {
    cell.char = char
  }
}

export function usePreDoc() {
  return {chars, brush, content, width, height, reset, paint}
}
