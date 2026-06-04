import {ref} from "vue"
import {useDimensions} from "./useDimensions"
import {useCharacters} from "./useCharacters"

const {chars} = useCharacters()
const {width, height, content, reset} = useDimensions()

const brush = ref(chars[0])

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
