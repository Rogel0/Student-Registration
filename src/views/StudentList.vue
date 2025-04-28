<template>
  <div class="h-screen">
    <HeaderComponent />
    <div class="flex flex-row justify-between p-4 sm:gap-2">
      <el-input style="width: 300px" :suffix-icon="Search" placeholder="Search" />
      <el-button @click="handleOpenDrawer('add')">Add Student</el-button>
    </div>

    <div class="p-10 grid lg:grid-cols-5 gap-6">
      <StudentCard />
    </div>

    <div>
      <DrawerComponent v-model:visible="drawers.add" @close="handleCloseDrawer('add')">
        <AddStudentForm />
      </DrawerComponent>

      <DrawerComponent v-model:visible="drawers.edit" @close="handleCloseDrawer('edit')">
        <EditStudentForm />
      </DrawerComponent>
    </div>
  </div>

  <!-- <el-button @click="handleOpenDrawer('edit')">Edit Student</el-button> -->
</template>

<script setup lang="ts">
import DrawerComponent from '@/components/DrawerComponent.vue'
import AddStudentForm from '@/components/forms/AddStudentForm.vue'
import EditStudentForm from '@/components/forms/EditStudentForm.vue'
import { useDrawer } from '@/composables/useDrawer'
import HeaderComponent from '@/components/HeaderComponent.vue'
import { Search } from '@element-plus/icons-vue'
import StudentCard from '@/components/StudentCard.vue'

const { drawers, handleOpenDrawer, handleCloseDrawer } = useDrawer()
</script>

<style scoped></style>
