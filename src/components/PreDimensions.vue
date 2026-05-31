<script setup>
import {usePreDoc} from "../composables/usePreDoc.js"
const {width, height} = usePreDoc()
</script>
<template>
  <fieldset>
    <legend>Dimensions</legend>
    <div>
      <input type="number" v-model="width"/> X <input type="number" v-model="height"/>
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
