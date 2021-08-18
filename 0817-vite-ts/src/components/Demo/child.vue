<template>
    <h1>{{theme}}</h1>
</template>

<script lang="ts">
import { defineComponent,inject, Ref, watchEffect } from 'vue'

export default defineComponent({
    name: "child",
    setup() {
        const theme = inject("test","llllllf")
        watchEffect(()=>{
            console.log("主题被修改了",(theme as unknown as Ref<string>).value)
        })
        return {
            theme
        }
    },
})
</script>
