<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
    <h3 class="text">vue3-ts</h3>
  <a>{{num}}</a>
</template>

<script setup lang="ts">
import { defineProps, onMounted, reactive, ref } from 'vue'
const color = "red"
const font = {
  size: "3em"
}
defineProps({
  msg: String
})

const state = reactive({ count: 0 })
let num: any = ref(100)
onMounted: {
  num=200
  console.log("挂载")
}
</script>

<style scoped>
:root {
  --varColor: yellowgreen;
  /* 生效要去掉scope */
}
a {
  color: var(--varColor);
}
.text{
  color:v-bind(color);
  font-size: v-bind("font.size");
}
</style>
