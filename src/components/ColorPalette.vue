<script setup>
import {ref} from "vue";
import {useColors} from "../composables/useColors"

const {generateRainbowRange, generateMonochromeRange} = useColors()

const active = ref(false)
const selected = ref(true)
const fg = ref('#ffffff')
const bg = ref('#000000')

const colors = generateRainbowRange(100)
const bright = generateMonochromeRange(0, 20)

function setColor(c) {
  if(selected.value) {
    fg.value = c.style
  } else {
    bg.value = c.style
  }
  active.value = false
}
</script>
<template>
  <button v-if="!active"
          @click="active = true">c:[<span class="current">🭜</span>]
  </button>
  <div v-if="active"
       class="color-mode">
    <label>fg:<input name="color-mode" type="radio" v-model="selected" :value="true"/></label>
    <label>bg:<input name="color-mode" type="radio" v-model="selected" :value="false"/></label>
  </div>
  <div v-if="active"
       class="color-box">
    <span></span>
    <span v-for="color in colors"
          :style="{color: color.style}"
          @click="setColor(color)">▒</span>
  </div>
  <div v-if="active"
       class="color-box mono">
    <span></span>
    <span v-for="mono in bright"
          :style="{color: mono.style}"
          @click="setColor(mono)">▒</span>
  </div>
</template>
<style scoped>
.current {
  background-color: v-bind(bg);
  color: v-bind(fg);
}

.color-mode {
  display: flex;
}

.color-box {
  display: grid;
  grid-template-columns: repeat(20, 1ch);
  grid-template-rows: repeat(6, var(--line-height));
}

.color-box > span:first-child {
  display: none;
}

.mono {
  grid-template-rows: repeat(3, 1ch);
}
</style>
