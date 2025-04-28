import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '../views/StudentList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/',
      name: 'student-list',
      component: StudentListView,
    },
  ],
})

export default router
