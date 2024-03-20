<template>
  <v-app-bar density="compact">
    <v-app-bar-nav-icon @click="toggleDrawer(!drawer)" />

    <v-app-bar-title>{{ title }}</v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import menus from '@/menus.js'
import { commonStore } from '@/stores/common.js'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

// DATA
const store = commonStore()
const route = useRoute()
const { drawer } = storeToRefs(store)
const { toggleDrawer } = store

// COMPUTED
const title = computed(() => {
  const { parentId } = route.meta
  return parentId ? getChildrenTitle(parentId) : menus.find(m => m.path === route.path)?.title
})

// METHODS
const getChildrenTitle = parentId => {
  const parent = menus.find(m => m.id === parentId)
  return parent ? parent.children.find(child => parent.path + child.path === route.path)?.title : ''
}
</script>
