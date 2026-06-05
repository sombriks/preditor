import {computed, ref} from "vue"

const fgHsl = ref({hue: 0, lightness: 100})
const bgHsl = ref({hue: 0, lightness: 0})
const fgStyle = computed(() => `hsl(${fgHsl.value.hue}, 100%, ${fgHsl.value.lightness}%)`)
const bgStyle = computed(() => `hsl(${bgHsl.value.hue}, 100%, ${bgHsl.value.lightness}%)`)
function generateRainbowRange(steps, lightness = 50) {
  const colors = [];
  for (let i = 0; i < steps; i++) {
    const hue = Math.round((i * 360) / steps);
    colors.push({hue, lightness, style: `hsl(${hue}, 100%, ${lightness}%)`});
  }
  return colors;
}

function generateMonochromeRange(steps, hue = 0) {
  const colors = [];
  for (let i = 0; i < steps; i++) {
    const lightness = Math.round((i * 100) / (steps - 1));
    colors.push({hue, lightness, style: `hsl(${hue}, 100%, ${lightness}%)`});
  }
  return colors;
}

export function useColors() {
  return {
    fgHsl,
    bgHsl,
    fgStyle,
    bgStyle,
    generateRainbowRange,
    generateMonochromeRange,
  };
}
