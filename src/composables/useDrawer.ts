import { reactive } from 'vue'

export function useDrawer() {
  const drawers = reactive<Record<string, boolean>>({})

  const handleOpenDrawer = (drawerId: string) => {
    drawers[drawerId] = true
  }

  const handleCloseDrawer = (drawerId: string) => {
    drawers[drawerId] = false
  }

  return {
    drawers,
    handleOpenDrawer,
    handleCloseDrawer,
  }
}
