<template>
  <el-card class="h-80 w-80">
    <template #header>
      <div class="flex flex-row justify-end gap-4">
        <deleteIcon class="hover:scale-110 cursor-pointer" />
        <editIcon class="hover:scale-110 cursor-pointer" />
      </div>
    </template>
    <div>
      <p>This is card body</p>
    </div>
  </el-card>
  <el-card class="h-80 w-80">
    <template #header>
      <div class="flex flex-row justify-end gap-4">
        <deleteIcon class="hover:scale-110 cursor-pointer" />
        <editIcon class="hover:scale-110 cursor-pointer" />
      </div>
    </template>
    <div>
      <p>This is card body</p>
    </div>
  </el-card>
  <el-card class="h-80 w-80">
    <template #header>
      <div class="flex flex-row justify-end gap-4">
        <deleteIcon class="hover:scale-110 cursor-pointer" />
        <editIcon class="hover:scale-110 cursor-pointer" />
      </div>
    </template>
    <div>
      <p>This is card body</p>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import deleteIcon from '@/assets/svg/delete-icon.vue'
import editIcon from '@/assets/svg/edit-icon.vue'
</script>
