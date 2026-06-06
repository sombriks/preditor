<script setup>
import {computed, ref} from "vue"
import {usePreDoc} from "../composables/usePreDoc"
import {useColors} from "../composables/useColors"
import {useKeyboardShortcuts} from "../composables/useKeyboardShortcuts"

const {brush, content, width, height, paint} = usePreDoc()
const {bgStyle, fgStyle} = useColors()

const row = ref(0)
const col = ref(0)

const matrixCell = computed(() => content.value.filter(c => c.rowIndex == row.value && c.colIndex == col.value).pop())

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

useKeyboardShortcuts({
  arrowup: (e) => row.value = Math.max(0, row.value - 1),
  arrowdown: (e) => row.value = Math.min(height.value - 1, row.value + 1),
  arrowleft: (e) => col.value = Math.max(0, col.value - 1),
  arrowright: (e) => col.value = Math.min(width.value - 1, col.value + 1),
  " ": (e) => paint(brush, matrixCell.value)
})
</script>
<template>
  <div>
    <fieldset>
      <legend>w:[{{ width }}]h:[{{ height }}]x:[{{ col }}]y:[{{ row }}]l:[<span class="current-color">{{ brush }}</span>]
      </legend>
      <pre @click="draw(true, $event.clientX, $event.clientY)"
           @mousemove="draw($event.buttons, $event.clientX, $event.clientY)"
      ><span :key="c.matrixIndex"
             v-for="c in content"
             :data-row-index="c.rowIndex"
             :data-col-index="c.colIndex"
             :data-matrix-index="c.matrixIndex"
             :style="{color: c.fgStyle, backgroundColor: c.bgStyle}"
             :class="{cursor: matrixCell.matrixIndex == c.matrixIndex}"
      >{{ c.char }}</span></pre>
    </fieldset>
  </div>
</template>
<style scoped>
.current-color {
  color: v-bind(fgStyle);
  background-color: v-bind(bgStyle);
}

fieldset {
  border: 1px solid var(--text-color);
  background-color: var(--background-color-alt);
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}

legend {
  margin: 0 auto;
}

pre {
  background-color: var(--background-color);
  max-width: v-bind(width) rem;
  min-width: v-bind(width) rem;
  max-height: v-bind(height) rem;
  min-height: v-bind(height) rem;
  display: inline-block;
  user-select: none;
  overflow: hidden;
  user-drag: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

pre:hover {
  cursor: crosshair;
}

.cursor {
  color: var(--background-color) !important;
  background-color: var(--text-color) !important;
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
