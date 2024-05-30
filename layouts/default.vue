<script setup lang="ts">
const colorMode = useColorMode()
const toggleDark = () => colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
</script>

<template>
  <header flex="~ gap-32 col lg:row items-center" max-h-screen px-32 py-40 max-w-700 mx-auto>
    <!-- Change the color of the logo for dark mode! -->
    <div i-nimiq:logos-nimiq-horizontal dark:i-nimiq:logos-nimiq-white-horizontal text-90 />
    <a href="https://github.com/onmax/nimiq-protector-of-the-chain" target="_blank">Github</a>
  </header>

  <main max-w-700 mx-auto pt-64 pb-92 flex="~ col items-center" text-center>
    <slot />
  </main>
</template>

<style>
h1 {
  --uno: text-64 my-0 mt-32;
}
</style>
