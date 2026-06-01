<script setup>
import {onMounted} from "vue";

import PreDimensions from "./components/PreDimensions.vue"
import PreActions from "./components/PreActions.vue"
import PreCanvas from "./components/PreCanvas.vue"
import CharPalette from "./components/CharPalette.vue"
import {usePreDoc} from "./composables/usePreDoc.js"

const {reset} = usePreDoc()

onMounted(reset)
</script>
<template>
  <div class="tools">
    <span></span>
    <div>
      <CharPalette/>
    </div>
    <details>
      <summary>Options</summary>
      <div class="options">
        <span><!-- not sure why but this fixes an layout issue for the first element--></span>
        <PreDimensions/>
        <PreActions/>
      </div>
    </details>
  </div>
  <div class="canvas">
    <PreCanvas/>
  </div>
</template>
<style scoped>
.tools, .options, .canvas {
  flex-wrap: wrap;
  display: flex;
  gap: 1rem;
}

.canvas {
  justify-content: center;
}
</style>
