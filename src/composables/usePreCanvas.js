import {ref, computed} from "vue"
import {useCharacters} from "./useCharacters"

const {chars} = useCharacters()

const w = ref(50)
const h = ref(20)
const matrix = ref([])
const matrixState = ref([])

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
    if (value < 5) value = 5
    if (value > 1000) value = 1000
    h.value = value
  }
})

const content = computed(() => matrix.value.flat())
const contentWidth = computed(() => (matrix.value[0]?.length || 0) - 1)
const contentHeight = computed(() => matrix.value.length)

function makeMatrix(cols, cells, char) {
  const m = []
  let matrixIndex = 0
  for (let rowIndex = 0; rowIndex < cols; rowIndex++) {
    const row = []
    for (let colIndex = 0; colIndex < cells; colIndex++) {
      row.push({char, matrixIndex, rowIndex, colIndex})
      matrixIndex++
    }
    row.push({char: '\n', matrixIndex, rowIndex})
    matrixIndex++
    m.push(row)
  }
  return m
}

function copyMatrix(origin, destiny) {
  for (let i = 0; i < origin.length && i < destiny.length; i++) {
    const oRow = origin[i]
    const dRow = destiny[i]
    for (let j = 0; j < oRow.length - 1 && j < dRow.length - 1; j++) {
      dRow[j].char = oRow[j].char
      dRow[j].bgStyle = oRow[j].bgStyle
      dRow[j].fgStyle = oRow[j].fgStyle
    }
  }
}

function pushState() {
  const m1 = matrix.value
  const m2 = makeMatrix(height.value, width.value, chars[0])
  copyMatrix(m1, m2)
  matrixState.value.push(m2)
  if (matrixState.value.length > 50) {
    matrixState.value.shift()
  }
}

function popState() {
  if (!matrixState.value.length) return
  const m1 = matrixState.value.pop()
  const m2 = matrixState.value.pop()
  if (m2) matrix.value = m2
  else if (m1) matrix.value = m1
  pushState()
}

function reset() {
  matrix.value = makeMatrix(height.value, width.value, chars[0])
  pushState()
}

function resize() {
  const m1 = matrix.value
  const m2 = makeMatrix(height.value, width.value, chars[0])
  copyMatrix(m1, m2)
  matrix.value = m2
  pushState()
}

function replace(mChar) {
  const mw = mChar[0].length - 1
  const mh = mChar.length
  const m1 = makeMatrix(mh, mw, chars[0])
  const blank = m1.flat()
  const mContent = mChar.flat()
  for (let i = 0; i < blank.length && i < mContent.length; i++) {
    blank[i].char = mContent[i]
  }
  matrix.value = m1
  width.value = mw
  height.value = mh
}

export function usePreCanvas() {
  return {width, height, content, contentWidth, contentHeight, replace, resize, reset, pushState, popState}
}
