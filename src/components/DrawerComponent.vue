<template>
  <el-drawer v-model="props.visible" :title="title">
    <slot></slot>
  </el-drawer>
</template>

<script setup lang="ts">
const props = defineProps({
  visible: Boolean,
  title: String,
})
</script>

<style scoped></style>
