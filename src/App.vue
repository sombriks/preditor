<template>
  <h1>hello world from vue</h1>
  <button @click="count++">Count is: {{count}}</button>
</template>
<style>
</style>
<script setup>
  import {ref} from "vue";

  const count = ref(0)
  console.log('hello world from vue')
</script>
