<script setup>
import {ref} from "vue"
import {useDimensions} from "../composables/useDimensions"
import {useExportImport} from "../composables/useExportImport"

const active = ref(false)
const imporTextData = ref("")
const importDialog = ref(false)

const  {popState} = useDimensions()
const {exportTXT, importTXT} = useExportImport()

function exportTo(op) {
  const result = op()
  if (result) {
    navigator.clipboard.writeText(result)
    alert("Exported to clipboard")
  }
}

function importFrom(op) {
  importDialog.value = false
  importTXT(imporTextData.value)
}

function cancelImport() {
  importDialog.value = false
  imporTextData.value = ""
}
</script>
<template>
  <button v-if="!active"
          @click="active = true">...
  </button>
  <div v-if="active"
       class="tool-box">
    <button @click="exportTo(exportTXT)">Export</button>
    <br/>
    <button @click="importDialog = true">Import</button>
    <br/>
    <button @click="popState">Undo</button>
    <br/>
    <a target="about" href="https://github.com/sombriks/preditor">About...</a>
    <hr/>
    <button @click="active = false">Done</button>
  </div>
  <!-- import dialog -->
  <div class="panel"
       v-if="importDialog">
    <form class="dialog"
          @submit.prevent.stop="importFrom(importTXT)">
      <label for="txt">Text to import</label>
      <textarea id="txt" rows="5" v-model="imporTextData"></textarea>
      <div>
        <button @click="cancelImport">Cancel</button>
        <input type="submit" value="Import"/>
      </div>
    </form>
  </div>
</template>
<style scoped>
.panel {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.dialog {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  background-color: var(--background-color);
}

.dialog>* {
  flex-grow: 1;
}

.dialog>textarea {
  min-height: 5rem;
}

.dialog>div {
  display: flex;
  justify-content: space-between;
}
</style>
