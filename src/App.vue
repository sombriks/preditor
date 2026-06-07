<script setup>
import {onMounted} from "vue"
import PreCanvas from "./components/PreCanvas.vue"
import PreActions from "./components/PreActions.vue"
import CharPalette from "./components/CharPalette.vue"
import ColorPalette from "./components/ColorPalette.vue"
import PreDimensions from "./components/PreDimensions.vue"

import {usePreCanvas} from "./composables/usePreCanvas"

const {reset} = usePreCanvas()

onMounted(reset)
</script>
<template>
  <div class="desk">
    <div class="tools">
      <CharPalette/>
      <ColorPalette/>
      <PreDimensions/>
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
  flex-grow: 1;
}

.tools {
  justify-content: start;
  flex-direction: column;
}
</style>
