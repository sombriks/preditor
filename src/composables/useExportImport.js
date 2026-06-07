import {usePreCanvas} from "./usePreCanvas.js"

const {content, replace} = usePreCanvas()

function exportTXT() {
  return content.value.map(c => c.char).join('')
}

function exportHTML() {
  return ''
}

function importTXT(str) {
  const blocks = str.split('\n')
  const rows = blocks.map(block => [...block])
  // normalize rows to the same size
  const width = rows.map(row => row.length).sort((a, b) => a - b).pop()
  rows.forEach(row => {
    while(row.length < width) {
      row.push(' ')
    }
  })
  // add line terminators back
  rows.forEach(row => row.push('\n'))
  // replace current matrix
  replace(rows)
}

export function useExportImport() {
  return {exportTXT, exportHTML, importTXT}
}
