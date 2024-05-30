<script setup lang="ts">
const emit = defineEmits<{
  (e: 'back'): void
}>()
</script>

<template>
  <img src="/empty-card.svg" alt="Empty Card" max-w-173 />
  <h1>You are not yet worthy</h1>
  <p subline mt-16>
    Prestake NIM to support the update to PoS and be among the first to earn.
  </p>
  <p subline>
Come back here and try again.
  </p>
  <button pill-blue pill-lg @click="$emit('back')">Try Again</button>
</template>
