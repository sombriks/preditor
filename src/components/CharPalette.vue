<script setup>
import {usePreDoc} from "../composables/usePreDoc"

const {brush, chars} = usePreDoc()

function setBrush(char) {
  brush.value = char
}
</script>
<template>
  <details>
    <summary>Palette</summary>
    <div class="palette-container">
      <button :key="char"
              v-for="char in chars"
              @click="setBrush(char)"
              :class="{selected: brush == char}">{{ char }}
      </button>
    </div>
  </details>
</template>
<style scoped>
.palette-container {
  display: flex;
  flex-wrap: wrap;
  gap:0;
}
button {
  margin: 0;
  padding: 0;
  padding-left:0.5rem;
  padding-right:0.5rem;
  border: none;
}

.selected {
  color: red;
  background-color: blue;
}
</style>
