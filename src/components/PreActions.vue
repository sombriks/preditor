<script setup>
import {usePreDoc} from "../composables/usePreDoc.js"
const {reset} = usePreDoc()
</script>
<template>
  <fieldset>
    <legend>Actions</legend>
    <div>
      <button @click="reset">Reset</button>
      <button>Copy</button>
      <button>Paste</button>
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
</style>
