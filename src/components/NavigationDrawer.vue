<template>
  <v-navigation-drawer>
    <v-sheet
      class="d-flex flex-column justify-center align-center pa-4"
      color="grey-lighten-4"
      height="25%"
    >
      <v-avatar size="115">
        <v-icon icon="mdi-account-circle" size="115"></v-icon>
      </v-avatar>

      <div class="text-center">
        <h2>김애옹</h2>
        <p>a_ong@company.kr</p>
      </div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <template v-for="menu in menus" :key="menu.id">
        <v-list-item
          v-if="!menu.children || menu.children.length === 0"
          density="compact"
          :title="menu.title"
          :to="menu.path"
        ></v-list-item>

        <v-list-group v-else value="management">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" density="compact" :title="menu.title"></v-list-item>
          </template>

          <v-list-item
            v-for="child in menu.children"
            density="compact"
            :key="child.id"
            :title="child.title"
            :to="menu.path + child.path"
          ></v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import menus from '@/menus.js'
</script>
