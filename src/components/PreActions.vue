<script setup>
import {ref} from "vue"
import {useExportImport} from "../composables/useExportImport"

const active = ref(false)
const {exportTXT, exportHTML, importTXT} = useExportImport()

function exportTo(op) {
  const result = op()
  if (result) {
    navigator.clipboard.writeText(result)
    alert("Exported to clipboard")
  }
}

function importFrom(op) {
  console.log("import")
}
</script>
<template>
  <button v-if="!active"
          @click="active = true">...
  </button>
  <div v-if="active"
       class="tool-box">
    <button @click="exportTo(exportTXT)">Export text</button>
    <br/>
    <button @click="exportTo(exportHTML)">Export html</button>
    <br/>
    <button @click="importFrom(importTXT)">Import text</button>
    <br/>
    <a target="about" href="https://github.com/sombriks/preditor">About...</a>
    <hr/>
    <button @click="active = false">Done</button>
  </div>
</template>
<style scoped>
</style>
