import {ref} from "vue"
import {useCharacters} from "./useCharacters"
import {usePreCanvas} from "./usePreCanvas"
import {useColors} from "./useColors"

const {chars} = useCharacters()
const {content} = usePreCanvas()
const {bgStyle, fgStyle} = useColors()

const brush = ref({ch: chars[3], smart: false}) // vertical line 1

function paint(brush, data) {
  if (!data || data.matrixIndex === undefined) {
    return
  }
  const char = brush.value.ch
  const cell = content.value.find(cell => cell.matrixIndex == data.matrixIndex)
  cell.char = char
  cell.bgStyle = bgStyle.value
  cell.fgStyle = fgStyle.value
}

export function useBrush() {
  return {brush, paint}
}
