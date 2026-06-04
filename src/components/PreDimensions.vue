<script setup>
import {usePreDoc} from "../composables/usePreDoc"
const {width, height} = usePreDoc()
</script>
<template>
  <details>
    <summary>Dimensions</summary>
      <input v-model="width"
      type="number"
      min="10"
      max="1000"/>
      X
      <input v-model="height"
      type="number"
      min="10"
      max="1000"/>
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
