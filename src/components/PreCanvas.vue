<script setup>
import {usePreDoc} from "../composables/usePreDoc"

const {brush, content, width, height, paint} = usePreDoc()

function draw(down, x, y) {
  if (!down) {
    return
  }
  const spanMaybe = document.elementFromPoint(x, y)
  if (!spanMaybe) {
    return
  }
  paint(brush.value, spanMaybe.dataset)
}
</script>
<template>
  <div>
    <pre @click="draw(true, $event.clientX, $event.clientY)"
         @mousemove="draw($event.buttons, $event.clientX, $event.clientY)"
    ><span :key="c.index" v-for="c in content"
           :data-matrix-index="c.matrixIndex"
           :data-row-index="c.rowIndex"
           :data-col-index="c.colIndex"
    >{{ c.char }}</span></pre>
  </div>
</template>
<style scoped>
pre {
  border: 1px solid var(--text-color);
  max-width: v-bind(width) rem;
  min-width: v-bind(width) rem;
  max-height: v-bind(height) rem;
  min-height: v-bind(height) rem;
  display: inline-block;
  user-select: none;
  overflow: hidden;
  user-drag: none;
}

pre:hover {
  cursor: crosshair;
}

</style>
