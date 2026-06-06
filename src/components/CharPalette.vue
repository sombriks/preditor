<script setup>
import {ref} from "vue"
import {useBrush} from "../composables/useBrush.js"
import {useCharacters} from "../composables/useCharacters"

const {chars} = useCharacters()
const {brush} = useBrush()
const active = ref(false)

function setBrush(char) {
  active.value = false
  brush.value = char
}
</script>
<template>
  <button v-if="!active" @click="active = !active">[{{brush}}]</button>
  <div v-if="active" class="palette-container">
    <button :key="char"
            class="chars"
            v-for="char in chars"
            @click="setBrush(char)"
            :class="{selected: brush == char}">{{ char }}</button>
  </div>
</template>
<style scoped>
.palette-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
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
