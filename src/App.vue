<script setup>
import {ref} from "vue";
import PreDimensions from "./components/PreDimensions.vue"

const width = ref(80)
const height = ref(25)
</script>
<template>
  <h1>Preditor</h1>
  <h2>Edit pre tags</h2>
  <details>
    <summary>Options</summary>
    <PreDimensions v-model:width="width" v-model:height="height"/>
  </details>
  <pre>X
                x

    x

  X</pre>
</template>
<style scoped>
pre {
  border: 1px solid var(--text-color);
  min-width: v-bind(width) rem;
  min-height: v-bind(height) rem;
}
</style>
