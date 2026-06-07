<script setup>
import {ref} from "vue"
import {useDimensions} from "../composables/useDimensions"

const active = ref(false)
const {width, height, reset, resize} = useDimensions()

</script>
<template>
  <button v-if="!active"
          @click="active = true"
  >w:[{{ width }}]h:[{{ height }}]
  </button>
  <div v-if="active"
       class="tool-box">
    <label>W
      <input min="10"
             max="1000"
             type="number"
             v-model="width"/>
    </label>
    <label>H
      <input min="5"
             max="1000"
             type="number"
             v-model="height"/>
    </label>
    <br/>
    <button @click="resize">Resize</button>
    <button @click="reset">Reset</button>
    <hr/>
    <button @click="active = false">Done</button>
  </div>
</template>
<style scoped>
label {
  text-wrap: nowrap;
  padding-right: 1rem;
}

.tool-box {
  margin-bottom: 1rem;
}
</style>
