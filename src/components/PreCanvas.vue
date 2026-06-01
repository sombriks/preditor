<script setup>
import {usePreDoc} from "../composables/usePreDoc"

const {brush, content, width, height, paint} = usePreDoc()

function draw(down, x, y) {
  if(!down) {
    return
  }
  const caret = document.caretPositionFromPoint(x, y);
  if (caret && caret.offsetNode) {
    const textNode = caret.offsetNode;
    const charIndex = caret.offset;
    const fullText = textNode.textContent;
    const ch = fullText.charAt(charIndex)
    if(ch !== '\n') {
      paint(brush.value, charIndex)
    }
  }
}
</script>
<template>
  <div>
    <pre v-html="content"
         @click="draw(true, $event.clientX, $event.clientY)"
         @mousemove="draw($event.buttons, $event.clientX, $event.clientY)"></pre>
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
  overflow: auto;
  user-drag: none;
}
pre:hover {
  cursor: crosshair;
}

</style>
