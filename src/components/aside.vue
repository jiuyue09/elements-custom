<template>
    <aside class="el-aside" :style="{width}">
        <slot></slot>
    </aside>
</template>

<script lang="ts">
export default {
    name:"ElAside"
}
</script>

<script lang="ts" setup>

import { withDefaults  } from 'vue'

type PropsValues = { width:string }

withDefaults(defineProps<PropsValues>(),{
    width:'300px'
})



</script>


<style lang="scss">
@import '../styles/mixin.scss';

@include b(aside) {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>