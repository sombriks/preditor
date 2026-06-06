import {ref} from "vue"
import {useDimensions} from "./useDimensions"
import {useCharacters} from "./useCharacters"
import {useColors} from "./useColors.js"

const {bgStyle, fgStyle} = useColors()
const {chars} = useCharacters()
const {width, height, content, reset} = useDimensions()

const brush = ref(chars[0])

function paint(brush, data) {
  if (!data || data.matrixIndex === undefined) {
    return
  }
  const char = brush.value
  const cell = content.value.find(cell => cell.matrixIndex == data.matrixIndex)
  cell.char = char
  cell.bgStyle = bgStyle.value
  cell.fgStyle = fgStyle.value
}

export function usePreDoc() {
  return {chars, brush, content, width, height, reset, paint}
}
