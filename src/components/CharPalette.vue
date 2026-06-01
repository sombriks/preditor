<script setup>
import {ref} from "vue";
// TODO https://en.wikipedia.org/wiki/Box-drawing_characters
const chars = ref([
  '\u2800', '─', '┄', '┅', '╌', '╍', '═', '▀', '▁', '▂', //
  '▃', '▄', '▅', '▆', '▇', '█', '▉', '▊', '▋', '▌', '▍', '▎', '▏', //
  '▐', '▕', '▖', '▗', '▘', '▙', '▚', '▛', '▜', '▝', '▞', '▟', //
  '░', '▒', '▓', '█', '▔', '▕', '▔', '▕'
])
function foo(char) {
  console.log(char)
}
</script>
<template>
  <div class="palette-box">
    <h2>Palette</h2>
    <div class="palette-container">
      <button v-for="char in chars"
              :key="char"
              @click="foo(char)">{{ char }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.palette-box {
  display: inline-block;
  max-width: 5rem;
}

.palette-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
