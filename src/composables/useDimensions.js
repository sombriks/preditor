import {ref, computed} from "vue";

const w = ref(25)
const h = ref(10)

const width = computed({
  get: () => w.value,
  set: (value) => {
    if (value < 10) value = 10
    if (value > 1000) value = 1000
    w.value = value
  }
})

const height = computed({
  get: () => h.value,
  set: (value) => {
    if (value < 10) value = 10
    if (value > 1000) value = 1000
    h.value = value
  }
})

export function useDimensions() {return {width, height}}
