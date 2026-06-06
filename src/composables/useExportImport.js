import {useDimensions} from "./useDimensions"

const {content} = useDimensions()

function exportTXT() {
  return content.value.map(c => c.char).join('')
}

function exportHTML() {
  return 'a'
}

function importTXT(str) {
}

export function useExportImport() {
  return {exportTXT, exportHTML, importTXT}
}
