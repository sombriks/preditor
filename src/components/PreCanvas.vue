<script setup>
import {ref} from "vue"

const content = ref(`X
   X



              X`)
</script>
<template>
  <pre v-html="content"></pre>
</template>
<style scoped>
pre {
  border: 1px solid var(--text-color);
}
</style>
