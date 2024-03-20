import { defineStore } from 'pinia'
import { ref } from 'vue'

export const commonStore = defineStore('common', () => {
  // STATES
  const drawer = ref(true)

  // ACTIONS
  const toggleDrawer = event => {
    drawer.value = event
  }

  return { drawer, toggleDrawer }
})
