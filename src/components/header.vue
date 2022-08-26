<template>
  <header class="el-heeader" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script lang="ts">
export default {
  name: "ElHeader",
};
</script>

<script setup lang="ts">
import { withDefaults,defineProps } from "vue";

interface Props {
  height?: string;
}

withDefaults(defineProps<Props>(),{
  height:"60px"
});


</script>

<style lang="scss">
@import "../styles/mixin.scss";

@include b(header) {
  padding: $--header-padding;
  box-sizing: border-box;
  flex-shrink: 0;
  
}
</style>
