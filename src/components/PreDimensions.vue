<script setup>
import {usePreDoc} from "../composables/usePreDoc"
const {width, height} = usePreDoc()
</script>
<template>
  <fieldset>
    <legend>Dimensions</legend>
    <div>
      <input v-model="width" type="number" min="10" max="1000"/>
      X
      <input v-model="height" type="number" min="10" max="1000"/>
    </div>
  </fieldset>
</template>
<style scoped>
fieldset {
  display: inline-block;
}
div {
  display: flex;
  align-items: center;
  gap: 1rem;
}
input {
  max-width: 5rem;
}
</style>
