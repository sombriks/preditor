<script setup>
import {usePreDoc} from "../composables/usePreDoc.js"

const {content, width, height} = usePreDoc()
</script>
<template>
  <div>
    <pre v-html="content"></pre>
  </div>
</template>
<style scoped>
pre {
  border: 1px solid var(--text-color);
  max-width: v-bind(width) rem;
  min-width: v-bind(width) rem;
  max-height: v-bind(height) rem;
  min-height: v-bind(height) rem;
  display: inline-block;
  overflow-x: scroll;
}
pre:hover {
  cursor: pointer;
}

</style>
