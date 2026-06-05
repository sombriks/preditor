<script setup>
import {useDimensions} from "../composables/useDimensions"

const {width, height, resize} = useDimensions()
</script>
<template>
  <details>
    <summary>Dimensions</summary>
    <label>W
      <input v-model="width"
             type="number"
             min="10"
             max="1000"/>
    </label>
    <label>H
      <input v-model="height"
             type="number"
             min="10"
             max="1000"/>
    </label>
    <hr/>
    <button @click="resize">Resize</button>
  </details>
</template>
<style scoped>
details {
  display: inline-block;
}

input {
  max-width: 5rem;
}
</style>
