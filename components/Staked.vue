<script setup lang="ts">
import { useShare } from '@vueuse/core'
const { share, isSupported } = useShare()


function startShare() {
  share({
    title: 'Hello',
    text: 'Nimiq is awesome!!',
    url: location.href,
  })
}
</script>

<template>
  <div grid relative>
    <img src="/empty-card-white.svg" alt="Empty Card" max-w-397 grid-full />
    <NuxtImg src="/fancy-identicon.svg" alt="Fancy identicon" width="256" height="280" grid-full />
    <img src="/spark.svg" alt="Spark" max-w-173 grid-full position self-end justify-self-center bottom--22 left--6 />
    <h2 text-26 grid-full self-end bottom-48 w-187 justify-self-center>Protector of the Chain</h2>
  </div>
  
  <h1>Protector of the Chain</h1>
  <p subline mt-16>
    The Nimiq community salutes you. May your rewards be plenty and your keys in self-custody.
  </p>
  <div bg-gradient-green px-16 py-20 flex="~ gap-24 items-center" h-max rounded-6 mt-32>
    <p text-white m-0>You are now Protector</p>
    <button pill bg-white text-darkblue @click="startShare">Share</button>
  </div>
</template>
