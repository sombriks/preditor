<script setup>
import {computed, ref} from "vue"
import {usePreDoc} from "../composables/usePreDoc"

const {brush, content, width, height, paint} = usePreDoc()

const row = ref(0)
const col = ref(0)

const matrixCell = computed(() => content.value.filter(c => c.rowIndex == row.value && c.colIndex == col.value)?.[0])

function draw(down, x, y) {
  if (!down) {
    return
  }
  const spanMaybe = document.elementFromPoint(x, y)
  if (!spanMaybe) {
    return
  }
  const {rowIndex, colIndex} = spanMaybe.dataset
  if (rowIndex !== undefined && colIndex !== undefined) {
    row.value = rowIndex
    col.value = colIndex
  }
  paint(brush, spanMaybe.dataset)
}
</script>
<template>
  <div>
    <fieldset>
      <legend>{{width}} X {{height}}</legend>
      <pre @click="draw(true, $event.clientX, $event.clientY)"
           @mousemove="draw($event.buttons, $event.clientX, $event.clientY)"
      ><span :key="c.index" v-for="c in content"
             :data-matrix-index="c.matrixIndex"
             :data-row-index="c.rowIndex"
             :data-col-index="c.colIndex"
             :class="{cursor: matrixCell && matrixCell.matrixIndex == c.matrixIndex}"
      >{{ c.char }}</span></pre>
    </fieldset>
  </div>
</template>
<style scoped>
fieldset {
  border: 1px solid var(--text-color);
  margin-bottom: 0;
  padding-bottom: 0;

}
legend {
  margin: 0 auto;
}
pre {
  max-width: v-bind(width) rem;
  min-width: v-bind(width) rem;
  max-height: v-bind(height) rem;
  min-height: v-bind(height) rem;
  display: inline-block;
  user-select: none;
  overflow: hidden;
  user-drag: none;
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}

pre:hover {
  cursor: crosshair;
}

.cursor {
  color: var(--background-color);
  background-color: var(--text-color);
  animation: blink-smooth 1.5s ease-in-out infinite;
}

@keyframes blink-smooth {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
