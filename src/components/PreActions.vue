<script setup>
import {ref} from "vue"
import {usePreDoc} from "../composables/usePreDoc"
import {useDimensions} from "../composables/useDimensions"

const {width, height} = usePreDoc()
const {reset, resize} = useDimensions()
const active = ref(false)
</script>
<template>
  <button v-if="!active"
          @click="active = true">...
  </button>
  <div v-if="active"
       class="tool-box">
    <label>W
      <input v-model="width"
             type="number"
             min="10"
             max="1000"/>
    </label>
    <label>H
      <input v-model="height"
             type="number"
             min="10"
             max="1000"/>
    </label>
    <br/>
    <button @click="resize">Resize</button>
    <button @click="reset">Reset</button>
    <hr/>
    <button>Export text</button>
    <br/>
    <button>Export html</button>
    <br/>
    <button>import text</button>
    <hr/>
    <button @click="active = false">Done</button>
  </div>
</template>
<style scoped>
label {
  text-wrap: nowrap;
  padding-right: 1rem;
}
</style>
