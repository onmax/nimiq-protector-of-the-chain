import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import { presetRemToPx } from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetNimiq({
      utilities: true,
    }),
    presetRemToPx({ baseFontSize: 4 }),
    presetAttributify(),
  ],
   transformers: [
    transformerDirectives(),
  ],
  rules: [
  ['grid-full', { 'grid-area': '1/-1', 'position': 'relative' }]
]
})
