<template>
  <v-app-bar density="compact">
    <v-app-bar-nav-icon @click="toggleDrawer(!drawer)" />

    <v-app-bar-title>Application</v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { commonStore } from '@/stores/common.js'
import { storeToRefs } from 'pinia'

// DATA
const store = commonStore()
const { drawer } = storeToRefs(store)
const { toggleDrawer } = store
</script>
