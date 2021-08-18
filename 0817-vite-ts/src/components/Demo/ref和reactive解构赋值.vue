<template>
    <h1>{{msg}}</h1>
    测试
    <h3>{{count}}</h3>
    <h3>{{obj.name}}</h3>
    <h3>{{name}}</h3>
</template>

<script setup lang="ts">
    
import { ref, reactive, toRefs } from 'vue'
defineProps({
    msg: String
})
// ref一般是某个元素 简单数据类型reactive对象
const count = ref(0)
console.log("count",count.value)
count.value++
console.log("count++",count.value)
// 使用reactive包裹ref
const state= reactive({
    count
})
console.log("state:",state.count)
const obj = reactive({
    name: 'rap',
    age: 12
})
const {name}={...toRefs(obj)}
</script>
