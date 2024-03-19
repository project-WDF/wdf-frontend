<template>
  <navigation-drawer />
  <app-bar />

  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import NavigationDrawer from '@/components/NavigationDrawer.vue'
import AppBar from '@/components/AppBar.vue'
</script>
