<template>
    <h1>{{msg}}</h1>
    <input type="text" ref="root" value="ref使用"/>
</template>

<script setup lang="ts">
    
import { ref, reactive, toRefs, onMounted } from 'vue'
defineProps({
    msg: String
})
const root = ref(null)
onMounted(()=>{
    console.log("root", root.value)
})
</script>
