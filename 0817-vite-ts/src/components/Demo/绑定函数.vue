<template>
  <div>默认的count:{{state.count}}</div>
  <button @click="increment">增加1</button>
</template>

<script setup lang="ts">
  import { reactive, computed } from "vue";
  type Dstate = {
    count: number,
    double: number
  }
  const state: Dstate= reactive({
    count: 0,
    double: computed(()=>state.count*2)
  })
  function increment() {
    state.count++
  }
</script>