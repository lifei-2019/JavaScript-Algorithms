<template>
    <h1>{{msg}}</h1>
    <h3>{{state.count}}</h3>
    <h3>{{statePlus.count}}</h3>
</template>

<script setup lang="ts">
    
import { watch, ref, reactive, toRefs } from 'vue'
defineProps({
    msg: String
})
const state = reactive({count:0})
// 复杂化
const statePlus = reactive({count:{count:10}})
watch(()=>state.count,(cur,prev)=>{
    console.log("第一个监听的值",cur,prev)
},{
    deep:true,
    // 刚渲染完会执行一次
    immediate:true
})
setTimeout(()=>{
    state.count++;
    statePlus.count.count++;
},1000)
</script>
