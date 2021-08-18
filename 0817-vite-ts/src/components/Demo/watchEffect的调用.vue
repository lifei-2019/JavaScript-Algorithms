<template>
    <h1>{{msg}}</h1>
</template>

<script setup lang="ts">
    
import { watch, ref, reactive, toRefs, onMounted, watchEffect } from 'vue'
defineProps({
    msg: String
})
// 不需要手动传入依赖 且不是lazy初始化执行分析依赖 无法获取原始值 
// 一些异步操作放里面更加合适 watch第三个参数处理副作用的第一个参数
const num = ref(0)
onMounted(()=>{
    console.log("onMounted")
})
const stop = watchEffect(()=>{
    console.log("watchEffect之前调用",num.value);
},{
    // 调用的时期
    // flush:"sync",
    onTrigger(e){
        // debugger
    }
})
// stop()
setTimeout(()=>{
    num.value++
},2000)
</script>
