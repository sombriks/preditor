<script setup>
import {onMounted} from "vue"

import PreDimensions from "./components/PreDimensions.vue"
import PreActions from "./components/PreActions.vue"
import PreCanvas from "./components/PreCanvas.vue"
import CharPalette from "./components/CharPalette.vue"
import {usePreDoc} from "./composables/usePreDoc"

const {reset} = usePreDoc()

onMounted(reset)
</script>
<template>
  <div class="desk">
    <div class="tools">
      <PreDimensions/>
      <CharPalette/>
      <PreActions/>
    </div>
    <div class="canvas">
      <PreCanvas/>
    </div>
  </div>
</template>
<style scoped>
.desk, .canvas, .tools {
  display: flex;
}

.canvas {
  justify-content: center;
  flex-grow: 1;
}

.tools {
  flex-direction: column;
}
</style>
