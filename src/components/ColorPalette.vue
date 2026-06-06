<script setup>
import {computed, ref} from "vue";
import {useColors} from "../composables/useColors"

const {fgHsl, bgHsl, bgStyle, fgStyle, generateRainbowRange, generateMonochromeRange} = useColors()

const selected = ref(fgHsl.value)
const active = ref(false)
const mode = ref(true)

const colors = generateRainbowRange(100)
const bright = computed(() => generateMonochromeRange(20, selected.value.hue))

function setColor(c) {
  selected.value = c
  if (mode.value) {
    fgHsl.value = c
  } else {
    bgHsl.value = c
  }
}
</script>
<template>
  <button v-if="!active"
          @click="active = true">[<span class="current">🭜</span>]
  </button>
  <div v-if="active"
       class="color-mode">
    <label>fg:<input name="color-mode" type="radio" v-model="mode" :value="true"/></label>
    <label>bg:<input name="color-mode" type="radio" v-model="mode" :value="false"/></label>
  </div>
  <div v-if="active"
       class="color-mode">
    <div class="preview">
      [<span class="current">🭜</span>]
    </div>
  </div>
  <div v-if="active"
       class="color-box">
    <span></span>
    <span v-for="color in colors"
          :style="{color: color.style}"
          :class="{selection: color.hue == selected.hue}"
          @click="setColor(color)">▒</span>
  </div>
  <div v-if="active"
       class="color-box mono">
    <span></span>
    <span v-for="mono in bright"
          :style="{color: mono.style}"
          :class="{selection: mono.lightness == selected.lightness}"
          @click="setColor(mono)">▒</span>
  </div>
  <div v-if="active"
       class="color-mode end">
    <button @click="active = false">close</button>
  </div>
</template>
<style scoped>
.current {
  background-color: v-bind(bgStyle);
  color: v-bind(fgStyle);
}

.color-mode {
  display: flex;
  justify-content: space-around;
}

.preview {
  font-size: 2em;
}

.color-box {
  display: grid;
  border: 1px solid var(--text-color);
  grid-template-columns: repeat(20, 1ch);
  grid-template-rows: repeat(6, var(--line-height));
}

.color-box > span:first-child {
  display: none;
}

.mono {
  grid-template-rows: repeat(2, var(--line-height));
}

.selection {
  border: 3px outset var(--text-color);
}

.end {
  margin-bottom: 1rem;
}
</style>
