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
              :class="{unselected: brush !== char}">{{ char }}
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
.unselected {
  border: 0;
}
</style>
