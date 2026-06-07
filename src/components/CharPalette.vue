<script setup>
import {ref} from "vue"
import {useBrush} from "../composables/useBrush"
import {useCharacters} from "../composables/useCharacters"

const {chars} = useCharacters()
const {brush} = useBrush()

const active = ref(false)

function setBrush(char, smart = false) {
  active.value = false
  brush.value.ch = char
  brush.value.smart = smart
}
</script>
<template>
  <button v-if="!active" @click="active = true">[{{ brush.ch }}]</button>
  <details v-if="active" :open="brush.smart" class="palette-container">
    <summary>Smart</summary>
  </details>
  <details v-if="active" :open="!brush.smart" class="palette-container">
    <summary>Simple</summary>
    <button :key="char"
            class="chars"
            v-for="char in chars"
            @click="setBrush(char)"
            :class="{selected: brush.ch == char}">{{ char }}
    </button>
  </details>
  <button v-if="active" @click="active = false">Done</button>
</template>
<style scoped>
.palette-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin: 1rem;
  min-width: 5rem;
}

.chars {
  margin: 0;
  padding: 0 0.5rem;
  border: none;
}

.selected {
  color: var(--background-color);
  background-color: var(--text-color);;
}
</style>
