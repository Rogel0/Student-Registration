<template>
  <HeaderComponent />
  <DrawerComponent v-model:visible="drawers.add" @close="handleCloseDrawer('add')">
    <AddStudentForm />
  </DrawerComponent>
  <DrawerComponent v-model:visible="drawers.edit" @close="handleCloseDrawer('edit')">
    <EditStudentForm />
  </DrawerComponent>
  <button @click="handleOpenDrawer('add')">Add Student</button>
  <button @click="handleOpenDrawer('edit')">Edit Student</button>
</template>

<script setup lang="ts">
import DrawerComponent from '@/components/DrawerComponent.vue'
import AddStudentForm from '@/components/forms/AddStudentForm.vue'
import EditStudentForm from '@/components/forms/EditStudentForm.vue'
import { useDrawer } from '@/composables/useDrawer'
import HeaderComponent from '@/components/HeaderComponent.vue'

const { drawers, handleOpenDrawer, handleCloseDrawer } = useDrawer()
</script>

<style scoped></style>
