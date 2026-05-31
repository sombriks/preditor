<script setup>
import PreDimensions from "./components/PreDimensions.vue"
import PreActions from "./components/PreActions.vue"
import PreCanvas from "./components/PreCanvas.vue"
</script>
<template>
  <h1>Preditor</h1>
  <h2>Edit pre tags</h2>
  <details>
    <summary>Options</summary>
    <div class="options">
      <span><!-- not sure why but this fixes an layout issue for the first element--></span>
      <PreDimensions/>
      <PreActions/>
    </div>
  </details>
  <div class="canvas">
    <PreCanvas/>
  </div>
</template>
<style scoped>
.options, .canvas {
  flex-wrap: wrap;
  display: flex;
  gap: 1rem;
}

.canvas {
  justify-content: center;
}
</style>
