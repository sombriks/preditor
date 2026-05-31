<script setup>
import {defineModel} from "vue"

  const width = defineModel('width')
  const height = defineModel('height')
</script>
<template>
  <fieldset>
    <legend>Dimensions</legend>
    <input type="number" v-model="width"/> X <input type="number" v-model="height"/>
  </fieldset>
</template>
<style scoped>
fieldset {
  display: flex;
  align-items: center;
  max-width: 12rem;
}
fieldset>input {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
