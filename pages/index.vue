<script setup lang="ts">
// const { consensus, head } = storeToRefs(useNimiqNetwork())

enum State { 
  Initial = "initial",
  AddressNoStake = "address-no-stake",
  AddressStake= "address-stake"
}
const state = ref(State.Initial)
const address = ref('')

function setAddress(newAddress: string) {
  address.value = newAddress
  state.value = Math.random() < 0.5 ? State.AddressNoStake : State.AddressStake
}

function reset(){
  address.value =''
  state.value = State.Initial
}
</script>

<template>
    <InitialState v-if="state === State.Initial" @input="setAddress" />
    <NoStaked v-else-if="state === State.AddressNoStake" @back="reset" />
    <Staked v-else-if="state === State.AddressStake" @back="reset" />
</template>
