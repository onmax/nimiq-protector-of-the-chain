<script setup lang="ts">
const emit = defineEmits<{
  (e: 'input', address: string): void
}>()

const address =ref<string>('')
</script>

<template>
  <img src="/empty-card.svg" alt="Empty Card" max-w-196 />
  <h1>Are you worthy?</h1>
  <p text-orange-1100 bg-orange-400 px-32 py-16 rounded-6 font-semibold>Set a random string to have the 50% chance of seeing your awesome card or see the empty state :(</p>
  <p subline mt-16>Enter your NIM address and find out</p>
  <form @submit.prevent="() => $emit('input', address)" mt-32 flex="~ col gap-32 items-center">
  <input v-model="address" type="text" input-text placeholder="..." max-w-320  rounded-6 />
  <button pill-blue pill-lg>Ask the blockchain</button>
  </form>
</template>
