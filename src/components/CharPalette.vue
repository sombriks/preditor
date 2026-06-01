<script setup>
import {usePreDoc} from "../composables/usePreDoc"
import  {useCharacters} from "../composables/useCharacters"

const {brush} = usePreDoc()
const {chars} = useCharacters()

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
  gap: 1rem;
}
.unselected {
  border: 0;
}
</style>
