<script setup>
import {ref} from "vue";
import PreDimensions from "./components/PreDimensions.vue"
import PreActions from "./components/PreActions.vue"
import PreCanvas from "./components/PreCanvas.vue"

const width = ref(80)
const height = ref(25)
</script>
<template>
  <h1>Preditor</h1>
  <h2>Edit pre tags</h2>
  <details>
    <summary>Options</summary>
    <div>
      <span><!-- not sure why but this fixes an layout issue for the first element--></span>
      <PreDimensions v-model:width="width" v-model:height="height"/>
      <PreActions/>
    </div>
  </details>
  <PreCanvas />
</template>
<style scoped>
details > div {
  display: flex;
  gap: 1rem;
}
</style>
