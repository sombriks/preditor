<script setup>
import {usePreDoc} from "../composables/usePreDoc"
const {reset} = usePreDoc()
</script>
<template>
  <details>
    <summary>Actions</summary>
    <button @click="reset">Clear</button>
    <button>Copy</button>
    <button>Paste</button>
  </details>
</template>
<style scoped>
details {
  display: inline-block;
}
</style>
