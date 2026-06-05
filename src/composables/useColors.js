function generateRainbowRange(steps) {
  const colors = [];
  for (let i = 0; i < steps; i++) {
    const hue = Math.round((i * 360) / steps);
    colors.push({hue, style: `hsl(${hue}, 100%, 50%)`});
  }
  return colors;
}

function generateMonochromeRange(baseHue, steps) {
  const colors = [];
  for (let i = 0; i < steps; i++) {
    // Vary lightness from 15% (dark) to 85% (light)
    const lightness = Math.round((i * 100) / (steps - 1));
    colors.push({lightness, style: `hsl(${baseHue}, 100%, ${lightness}%)`});
  }
  return colors;
}

export function useColors() {
  return {
    generateRainbowRange,
    generateMonochromeRange,
  };
}
