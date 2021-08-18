<template>
    <h1>{{msg}}</h1>
    <DemoChild />
</template>

<script setup lang="ts">
    
import { ref, provide, onMounted, watchEffect } from 'vue'
import DemoChild from './child.vue'

defineProps({
    msg: String
})
const themeRef = ref("dark")
provide("test",themeRef)
function changeTheme(){
    themeRef.value = Math.random().toString();
}
setTimeout(()=>{
    themeRef.value="red"
},3000)
</script>
