<template>
    <main class="el-main">
        <slot></slot>
    </main>
</template>

<script lang="ts">
export default {
    name:'ELMain'
}
</script>

<script setup lang="ts">
</script>

<style lang="scss">
@import '../styles/mixin.scss';

@include b(main) {
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: 20px;
}

</style>