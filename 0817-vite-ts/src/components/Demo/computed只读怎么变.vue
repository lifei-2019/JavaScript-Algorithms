<template>
    <h1>{{msg}}</h1>
    <h2>{{plusOne}}</h2>
</template>

<script setup lang="ts">
    
import { computed, ref, reactive, toRefs, onMounted } from 'vue'
defineProps({
    msg: String
})
const count = ref(1)
// const plusOne = computed(()=>count.value+1)
// 返回的是一个readonly类型的ts
// plusOne.value++
const plusOne = computed({
    get: ()=>count.value+2,
    set: (val)=>{
        count.value = val-1
    }
})
plusOne.value = Math.random()
</script>
