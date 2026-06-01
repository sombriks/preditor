<script setup>
import {usePreDoc} from "../composables/usePreDoc"

const {content, width, height} = usePreDoc()

function click(event) {
  const x = event.clientX
  const y = event.clientY
  const caret = document.caretPositionFromPoint(x, y);

  if (caret && caret.offsetNode) {
    const textNode = caret.offsetNode;
    const charIndex = caret.offset;
    const fullText = textNode.textContent;
    const repl = fullText.split('')
    repl.splice(charIndex, 1, '▒')
    content.value = repl.join('')
  }
}
</script>
<template>
  <div>
    <pre v-html="content" @click="click"></pre>
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
  overflow-x: scroll;
}
pre:hover {
  cursor: pointer;
}

</style>
